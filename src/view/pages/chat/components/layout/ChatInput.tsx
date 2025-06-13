import { useState, useRef } from 'react';
import { ImageIcon } from 'lucide-react';

interface ChatInputProps {
  onSend: (text: string, files?: File[]) => void;
}

export const ChatInput = ({ onSend }: ChatInputProps) => {
  const [text, setText] = useState('');
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((!text.trim() && selectedFiles.length === 0) || text.length > 2000) return;

    onSend(text, selectedFiles);
    setText('');
    setSelectedFiles([]);
    setPreviewUrls([]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => file.type.startsWith('image/'));
    
    setSelectedFiles(prev => [...prev, ...validFiles]);

    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrls(prev => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-chat-dark">
      {previewUrls.length > 0 && (
        <div className="flex gap-2 mb-2 flex-wrap">
          {previewUrls.map((url, index) => (
            <div key={index} className="relative">
              <img
                src={url}
                alt="preview"
                className="h-20 w-20 object-cover rounded"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-sm"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-2 items-center">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="p-2 hover:bg-gray-700 rounded"
        >
          <ImageIcon className="w-5 h-5" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          multiple
          className="hidden"
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="메시지 입력..."
          className="flex-1 bg-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={!text.trim() && selectedFiles.length === 0}
          className="px-4 py-2 bg-blue-500 rounded disabled:opacity-50 hover:bg-blue-600"
        >
          전송
        </button>
      </div>
    </form>
  );
};