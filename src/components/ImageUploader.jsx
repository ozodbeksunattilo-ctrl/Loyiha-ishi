import React, { useRef, useState } from 'react'
import { FaUpload, FaLink, FaImage, FaTimes } from 'react-icons/fa'
import { fileToCompressedDataUrl } from '../utils/media'

function ImageUploader({ value, onChange, label = 'Rasm', placeholder = 'https://... yoki fayl tanlang', aspectClass = 'h-40' }) {
  const fileRef = useRef(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleFile = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setIsUploading(true)
    try {
      const dataUrl = await fileToCompressedDataUrl(file, 800, 0.7)
      onChange(dataUrl)
    } catch (err) {
      alert("Rasm yuklashda xatolik: " + err.message)
    } finally {
      setIsUploading(false)
      e.target.value = ''
    }
  }

  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold text-zinc-400 mb-1">{label}</label>

      {/* Preview + upload buttons */}
      <div className="flex gap-3">
        <div className={`w-24 ${aspectClass} rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 flex-shrink-0 relative`}>
          {value ? (
            <>
              <img src={value} alt="preview" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => onChange('')}
                className="absolute top-1 right-1 p-1 rounded-full bg-zinc-950/80 text-red-400 hover:text-red-300 text-[10px] cursor-pointer"
              >
                <FaTimes />
              </button>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-600 text-2xl">
              <FaImage />
            </div>
          )}
        </div>

        <div className="flex-1 space-y-2">
          {/* URL input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 text-xs">
              <FaLink />
            </div>
            <input
              type="text"
              value={value && value.startsWith('data:') ? '' : (value || '')}
              placeholder={placeholder}
              onChange={(e) => onChange(e.target.value)}
              className="w-full px-4 py-2 pl-8 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-medium text-white outline-none focus:border-orange-500"
            />
          </div>

          {/* File upload button */}
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={isUploading}
            className="w-full px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {isUploading ? (
              <span className="flex items-center gap-2"><FaUpload className="animate-pulse" /> Yuklanmoqda...</span>
            ) : (
              <span className="flex items-center gap-2"><FaUpload className="text-orange-400" /> Kompyuterdan yuklash</span>
            )}
          </button>
          <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
        </div>
      </div>
    </div>
  )
}

export default ImageUploader
