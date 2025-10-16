import React from 'react';
import { StudentData } from '../types';

interface InputFormProps {
  data: StudentData;
  onDataChange: (newData: Partial<StudentData>) => void;
  onDownload: () => void;
  isDownloading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ data, onDataChange, onDownload, isDownloading }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDataChange({ [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onDataChange({ [e.target.name]: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-700 border-b pb-2">Student Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" name="fullName" id="fullName" value={data.fullName} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
          <input type="text" name="department" id="department" value={data.department} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">ID Number</label>
          <input type="text" name="idNumber" id="idNumber" value={data.idNumber} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">Blood Group</label>
          <input type="text" name="bloodGroup" id="bloodGroup" value={data.bloodGroup} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input type="text" name="contactNumber" id="contactNumber" value={data.contactNumber} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700">Issue Date</label>
          <input type="date" name="issueDate" id="issueDate" value={data.issueDate} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Student Photo</label>
          <input type="file" name="photo" id="photo" accept="image/*" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100" />
        </div>
        <div>
          <label htmlFor="signature" className="block text-sm font-medium text-gray-700">Holder's Signature</label>
          <input type="text" name="signature" id="signature" value={data.signature} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-signature text-lg" />
        </div>
        <div>
          <label htmlFor="authoritySignature" className="block text-sm font-medium text-gray-700">Authority Signature</label>
          <input type="text" name="authoritySignature" id="authoritySignature" value={data.authoritySignature} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-signature-authority text-xl" />
        </div>
      </div>
     /* <div className="pt-4">
        <button
          onClick={onDownload}
          disabled={isDownloading}
          className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed"
        >
          {isDownloading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Downloading...
            </>
          ) : (
            'Download ID Card'
          )}
        </button>
      </div>*/
    </div>
  );
};

export default InputForm;