import React from 'react';
import { Download, ExternalLink, FileText } from 'react-feather';

const RESUME_URL = `${process.env.PUBLIC_URL}/Umesh_Anubrolu_Resume.pdf`;

const Resume = () => {
    return (
        <div className="flex flex-col gap-4 mt-12 md:mt-0" data-test-id="resume-section">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b pb-2">
                <h2 className="text-3xl font-bold">RESUME</h2>
                <div className="flex flex-wrap gap-2" data-test-id="resume-section-actions">
                    <a
                        href={RESUME_URL}
                        download="Umesh_Anubrolu_Resume.pdf"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDB813] text-gray-900 font-semibold hover:bg-[#e0a800]"
                        data-test-id="resume-section-download"
                    >
                        <Download className="w-4 h-4" aria-hidden="true" /> Download PDF
                    </a>
                    <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#FDB813] text-gray-900 font-semibold hover:bg-[#fff7e0]"
                        data-test-id="resume-section-open"
                    >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" /> Open in new tab
                    </a>
                </div>
            </div>
            {/* Phones can't show a PDF inline, so they get a card; larger screens get the viewer */}
            <div className="md:hidden flex items-center gap-3 bg-gray-100 rounded-lg p-4" data-test-id="resume-section-mobile">
                <FileText className="w-8 h-8 text-[#FDB813] flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-gray-700">Two-page PDF. Use the buttons above to download it or open it in your browser.</p>
            </div>
            <object
                data={RESUME_URL}
                type="application/pdf"
                aria-label="Umesh Chowdary Anubrolu's resume"
                className="hidden md:block w-full h-[560px] rounded border"
                data-test-id="resume-section-viewer"
            >
                <p className="p-4 text-sm text-gray-700">
                    Your browser can't show the PDF here. <a href={RESUME_URL} className="underline">Download the resume</a> instead.
                </p>
            </object>
        </div>
    );
};

export default Resume;
