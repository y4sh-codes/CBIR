import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Upload.css';

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
      setResults(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
      setResults(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setProgress(0);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate API call
    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setIsLoading(false);
      
      // Mock results
      setResults({
        similarImages: [
          { id: 1, url: 'https://picsum.photos/300/300?random=1', similarity: 98 },
          { id: 2, url: 'https://picsum.photos/300/300?random=2', similarity: 95 },
          { id: 3, url: 'https://picsum.photos/300/300?random=3', similarity: 92 },
          { id: 4, url: 'https://picsum.photos/300/300?random=4', similarity: 89 },
          { id: 5, url: 'https://picsum.photos/300/300?random=5', similarity: 85 },
          { id: 6, url: 'https://picsum.photos/300/300?random=6', similarity: 82 },
        ]
      });
    }, 2500);
  };

  const resetUpload = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setResults(null);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="upload-page">
      <div className="upload-container">
        <motion.h1
          className="upload-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Upload & Search
        </motion.h1>

        <motion.p
          className="upload-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Upload an image to find visually similar images
        </motion.p>

        {!previewUrl ? (
          <motion.div
            className="upload-box"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="file-input"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="upload-label">
              <div className="upload-icon">📸</div>
              <p className="upload-text">
                Drag and drop your image here
              </p>
              <p className="upload-subtext">
                or click to browse
              </p>
              <p className="upload-formats">
                Supports: JPG, PNG, WebP, GIF
              </p>
            </label>
          </motion.div>
        ) : (
          <div className="preview-section">
            <motion.div
              className="preview-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img src={previewUrl} alt="Preview" className="preview-image" />
              <div className="preview-actions">
                <button onClick={resetUpload} className="btn-secondary">
                  Change Image
                </button>
                <button
                  onClick={handleUpload}
                  disabled={isLoading}
                  className="btn-primary"
                >
                  {isLoading ? 'Searching...' : 'Find Similar Images'}
                </button>
              </div>
            </motion.div>

            <AnimatePresence>
              {isLoading && (
                <motion.div
                  className="loading-container"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="loading-bar-container">
                    <motion.div
                      className="loading-bar"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <p className="loading-text">{progress}% Complete</p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {results && !isLoading && (
                <motion.div
                  className="results-section"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="results-title">Similar Images Found</h2>
                  <div className="results-grid">
                    {results.similarImages.map((image, index) => (
                      <motion.div
                        key={image.id}
                        className="result-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <img src={image.url} alt={`Similar ${index + 1}`} className="result-image" />
                        <div className="result-similarity">
                          {image.similarity}% Match
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
