import React, { forwardRef } from 'react';
// FIX: Switched from the default import of 'qrcode.react' to the named import 'QRCodeSVG'
// and updated the component usage to resolve a JSX component type error.
import { QRCodeSVG } from 'qrcode.react';
import { StudentData } from '../types';

// --- ICON COMPONENTS ---
const RuetBuildings: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`relative w-[336px] h-[90px] ${className}`}>
      {/* Sun */}
      <div className="absolute w-11 h-11 bg-red-400 rounded-full right-[48px] top-[14px] opacity-80"></div>

      {/* Main buildings silhouette and decorative swoosh */}
      <svg viewBox="0 0 336 90" className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="xMidYMax meet">
        <defs>
          <linearGradient id="buildingGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3A4A5D" />
            <stop offset="100%" stopColor="#5E728A" />
          </linearGradient>
          <linearGradient id="backgroundGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5E728A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8A9BAA" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Faint Background Cityscape with more defined shapes */}
        <path 
            fill="url(#backgroundGradient)"
            d="M50 90 V80 H70 V75 H90 V90 z 
               M220 90 V70 L230 65 L240 70 V90 z
               M245 90 V60 Q260 45 275 60 V90 z
               M290 90 V80 H310 V70 L320 75 V90 z
            "
        />
        
        {/* Decorative Swoosh above the main building, repositioned */}
        <path
          d="M 148 28 C 160 21, 170 21, 182 28"
          stroke="#9DB2C9"
          strokeWidth="1.5"
          fill="none"
        />

        {/* The main building silhouette path, completely redrawn for accuracy. */}
        <path
          fill="url(#buildingGradient)"
          fillRule="evenodd"
          d="M0 90 V70 H15 V60 H35 V90 H40 V55 H60 V90 H65 V45 H105 V33 H215 V45 H255 V90 H260 V35 L275 20 L290 35 V90 H295 V60 H315 V90 H320 V70 H336 V90 Z
             M115 90 V50 C115 48 117 46 120 46 H200 C203 46 205 48 205 50 V90 Z"
        />
      </svg>
    </div>
);

// --- ID CARD BACK COMPONENT ---
interface IdCardBackProps {
  data: StudentData;
}

const IdCardBack = forwardRef<HTMLDivElement, IdCardBackProps>(({ data }, ref) => {
  const qrValue = JSON.stringify({
    name: data.fullName,
    id: data.idNumber,
    dept: data.department
  });
  
  const formatDate = (dateString: string) => {
    if (!dateString) return { day: 'DD', month: 'MM', year: 'YYYY' };
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return { day, month, year };
  };

  const { day, month, year } = formatDate(data.issueDate);
  
  return (
    <div ref={ref} className="w-[336px] h-[212px] bg-white rounded-lg shadow-lg relative overflow-hidden font-sans border border-gray-200 flex flex-col">
      
      <div className="relative z-10 p-2.5 flex flex-col flex-grow text-slate-800">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div className="text-[9px]">
            <p>Issuing Authority:</p>
            <div className="font-signature-authority text-3xl text-slate-700 w-24 -mt-2 -ml-1">
                {data.authoritySignature}
            </div>
          </div>
          <div className="text-center text-[9px]">
            <p>Issue Date</p>
            <div className="flex space-x-2.5 mt-1 text-[10px] font-semibold">
              <span>{day}</span>
              <span>{month}</span>
              <span>{year}</span>
            </div>
            <div className="flex space-x-2.5 text-[8px] text-gray-500">
              <span>DD</span>
              <span>MM</span>
              <span>YY</span>
            </div>
          </div>
          <div className="w-[60px] h-[60px] border border-gray-300 p-0.5 bg-white flex items-center justify-center">
             <QRCodeSVG
              value={qrValue}
              size={56}
              level={"H"}
              bgColor={"#ffffff"}
              fgColor={"#000000"}
              aria-label={`QR Code for ${data.fullName}`}
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex-1 text-[9px] leading-tight mt-1 font-medium">
          <p className="font-bold">Director of Students' Welfare,</p>
          <p>RUET, Rajshahi-6204, Bangladesh.</p>
          <p>Phone: 0721-750885 Ext. 137</p>
          <p>Email: dsw@ruet.ac.bd</p>
          <p>Website: www.ruet.ac.bd</p>
        </div>
      </div>
      
      {/* Bottom section with buildings and property text */}
      <div className="relative z-0">
         {/* Background Building Silhouette - adjusted position to be fully visible */}
        <div className="absolute bottom-6 left-0 right-0">
            <RuetBuildings className="w-full" />
        </div>
        {/* Property text container with a light blue background and left-aligned text */}
        <div className="relative bg-sky-200 pt-1 pb-1 px-2 text-[8.5px] text-slate-800 text-left leading-tight">
            <p>This Card is the property of RUET, Rajshahi-6204, Bangladesh.</p>
            <p>The card must be surrendered at the time of taking clearance from this University.</p>
        </div>
      </div>
    </div>
  );
});

export default IdCardBack;