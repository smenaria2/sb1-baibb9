import React, { useState, useRef } from 'react';
import { Download, Share2, Camera, Sparkles } from 'lucide-react';
import { GreetingCard } from './components/GreetingCard';
import { UploadForm } from './components/UploadForm';
import html2canvas from 'html2canvas';

export default function App() {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [showGreeting, setShowGreeting] = useState(false);
  const greetingRef = useRef<HTMLDivElement>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.size <= 3 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      alert('फ़ाइल का साइज़ 3MB से कम होना चाहिए।');
    }
  };

  const generateGreeting = () => {
    if (name && photo) {
      setShowGreeting(true);
    } else {
      alert('कृपया अपना नाम और फोटो दर्ज करें।');
    }
  };

  const downloadGreeting = async () => {
    if (greetingRef.current) {
      try {
        const canvas = await html2canvas(greetingRef.current, {
          scale: 2,
          backgroundColor: null,
          width: 1080,
          height: 1920,
          useCORS: true,
          allowTaint: true,
        });
        
        const link = document.createElement('a');
        link.download = `diwali-greeting-${name}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (error) {
        console.error('Error downloading greeting:', error);
        alert('डाउनलोड करने में त्रुटि हुई।');
      }
    }
  };

  const shareGreeting = () => {
    if (navigator.share) {
      navigator.share({
        title: 'दीपावली की शुभकामनाएं',
        text: `${name} की ओर से दीपावली की हार्दिक शुभकामनाएं!`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-diwali bg-cover bg-center bg-fixed">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4 animate-text-glow">
            दीपावली शुभकामना संदेश
          </h1>
          <div className="animate-pulse">
            <Sparkles className="inline-block text-yellow-500 w-8 h-8" />
          </div>
        </div>

        {!showGreeting ? (
          <UploadForm
            name={name}
            setName={setName}
            handlePhotoUpload={handlePhotoUpload}
            photo={photo}
            generateGreeting={generateGreeting}
          />
        ) : (
          <div ref={greetingRef} className="w-[1080px] h-[1920px] mx-auto scale-50 origin-top">
            <GreetingCard
              name={name}
              photo={photo}
            />
          </div>
        )}

        <div className="fixed bottom-4 left-4 flex gap-4">
          {showGreeting && (
            <>
              <button
                onClick={downloadGreeting}
                className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                <Download />
              </button>
              <button
                onClick={shareGreeting}
                className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                <Share2 />
              </button>
            </>
          )}
        </div>

        <div className="fixed bottom-4 right-4 text-sm text-white/70">
          navsrijan.in
        </div>
      </div>
    </div>
  );
}