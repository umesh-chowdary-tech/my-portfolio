import React, { useState } from 'react';
import resumeImg from '../images/Umesh_Anubrolu_Resume (1)_page-0001.jpg'

const Resume = () => {
    const [zoom, setZoom] = useState(1); // default 100%
    const handleZoomIn = () => setZoom(z => Math.min(z + 0.2, 3));
    const handleZoomOut = () => setZoom(z => Math.max(z - 0.2, 0.5));
    const handleZoomInput = (e) => {
        let value = Number(e.target.value);
        if (isNaN(value)) value = 100;
        value = Math.max(50, Math.min(300, value));
        setZoom(value / 100);
    };
    const overflowClass = zoom === 1 ? 'overflow-hidden' : 'overflow-auto';
    return (
        <div className={`max-h-[70vh] md:max-h-[600px] ${overflowClass} pr-2 flex flex-col items-center p-2 sm:p-4`} data-test-id="resume-section">
            <div className="mb-2 flex gap-2 items-center" data-test-id="resume-section-zoom-controls">
                <button onClick={handleZoomOut} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300" data-test-id="resume-section-zoom-out">−</button>
                <input
                    type="number"
                    min={50}
                    max={300}
                    step={1}
                    value={Math.round(zoom * 100)}
                    onChange={handleZoomInput}
                    className="w-16 px-2 py-1 border rounded text-center"
                    data-test-id="resume-section-zoom-input"
                />
                <span className="font-semibold" data-test-id="resume-section-zoom-level">%</span>
                <button onClick={handleZoomIn} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300" data-test-id="resume-section-zoom-in">+</button>
            </div>
            <div className="flex justify-center items-center w-full" data-test-id="resume-section-image-wrapper">
                <img 
                    src={resumeImg} 
                    alt="Resume" 
                    className="w-full max-w-md h-auto object-contain rounded shadow" 
                    style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
                    data-test-id="resume-section-image"
                />
            </div>
        </div>
    )
}

export default Resume;