import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfFile from './PdfFile';

const Blogs = () => {
  return (
    <div className='px-5 md:px-36'>
      <div className='p-5 md:p-10 py-10 md:py-16'>
        <div className='text-end mb-3'>
          <PDFDownloadLink document={<PdfFile></PdfFile>} fileName='blogs'>
            <button className="btn btn-primary text-red-900">Download</button>
          </PDFDownloadLink>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='border p-3 md:p-5 rounded-lg bg-white'>
            <p className='font-medium'>Differences between uncontrolled and controlled components?</p>
            <p className='mt-3'><span className=''>Answer:</span> Which component manages its own state internally that is known as uncontrolled component. On the other hand controlled component is controlled by the parent component. In uncontrolled component while user interacts then its internal state updated directly. But controlled component controlled by calling function and using props.</p>
          </div>
          <div className='border p-3 md:p-5 rounded-lg bg-white'>
            <p className='font-medium'>How to validate React props using PropTypes?</p>
            <p className='mt-3'><span className=''>Answer:</span>PropTypes is a package. Which usually validate react components props. Developer can use it by installing via npm or yearn. If a component pass invalid type of props then PropTypes will throw and error and also console an alert.</p>
          </div>
          <div className='border p-3 md:p-5 rounded-lg bg-white'>
            <p className='font-medium'>Differences between nodejs and express js.</p>
            <p className=''><span className=''>Answer:  </span>Both tools used for web development though both of them have different purpose to complete. Node.js is actually is a runtime environment tools that run JavaScript code outside a browser. It makes platform for making web servers and also network applications. On top of that, Express.js is a web application framework. Main task of it is work as middleware for handling HTTP requests and responses. Also it control routing and template rendering.</p>
          </div>
          <div className='border p-3 md:p-5 rounded-lg bg-white'>
            <p className='font-medium'>What is a custom hook, and why will you create a custom hook?</p>
            <p className=''><span className=''>Answer:</span>Mainly, custom hook is a JS function that uses React Hooks. It returns logic which can be shared through multiple components. For multiple purpose we can use custom hook. For example, 1. Not to repeat same code, 2. Can be used on encapsulating stateful logic.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;