import React from 'react';
import { Camera } from 'lucide-react';

interface UploadFormProps {
  name: string;
  setName: (name: string) => void;
  handlePhotoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  photo: string | null;
  generateGreeting: () => void;
}

export function UploadForm({ name, setName, handlePhotoUpload, photo, generateGreeting }: UploadFormProps) {
  return (
    <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-xl">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
            अपना नाम दर्ज करें
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-orange-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="आपका नाम"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            अपनी फोटो अपलोड करें
          </label>
          <div className="relative">
            {photo ? (
              <div className="relative w-32 h-32 mx-auto">
                <img
                  src={photo}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-full"
                />
                <label
                  htmlFor="photo-upload"
                  className="absolute bottom-0 right-0 p-2 bg-orange-500 text-white rounded-full cursor-pointer hover:bg-orange-600"
                >
                  <Camera className="w-5 h-5" />
                </label>
              </div>
            ) : (
              <label
                htmlFor="photo-upload"
                className="flex flex-col items-center justify-center w-32 h-32 mx-auto border-2 border-dashed border-orange-300 rounded-full cursor-pointer hover:border-orange-500"
              >
                <Camera className="w-8 h-8 text-orange-500" />
                <span className="mt-2 text-sm text-orange-500">फोटो चुनें</span>
              </label>
            )}
            <input
              type="file"
              id="photo-upload"
              className="hidden"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </div>
        </div>

        <button
          onClick={generateGreeting}
          className="w-full py-3 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium text-lg"
        >
          शुभकामना संदेश बनाएं
        </button>
      </div>
    </div>
  );
}