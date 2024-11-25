import React, { useState, useEffect } from 'react';

const Form2 = () => {
  const [display, setDisplay] = useState(false);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true);
      setShow(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => setDisplay(false), 300);
  };


  const render = () =>{
    switch(page){
      case 1:
        return (
          <div className={`form-popup rounded px-3 ${show ? 'show' : 'hide'}`}>
          <div className="form-content">
            <div className='d-flex justify-content-between'>
            <div className="h5 mt-4">Where do you wanted to go?</div>
          <button onClick={handleClose} className='border-none bg-white' style={{height:"30px"}}><i className='fa-solid fa-close text-secondary'/></button>
            </div>
            <div className='my-3'>
              <button className="my-2 btn btn-outline-secondary d-block w-100" onClick={()=>setPage(page+1)}>Umrah</button>
              <button className="my-2 btn btn-outline-secondary d-block w-100" onClick={()=>setPage(page+1)}>Hajj</button>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
            <button className="btn-danger border-none py-2 text-white rounded w-100 my-3" onClick={()=>setPage(page+1)}>Next</button>
            </div>
          </div>
        </div>
        );
      case 2:
        return (
          <div className={`form-popup rounded px-3 ${show ? 'show' : 'hide'}`}>
          <div className="form-content">
            <div className='d-flex justify-content-between'>
            <div className="h5 mt-4">How do we contact you?</div>
          <button onClick={handleClose} className='border-none bg-white' style={{height:"30px"}}><i className='fa-solid fa-close text-secondary'/></button>
            </div>
            <div className='my-3'>
              <div className='border my-2 rounded'>
              <input type="text" className='border-none w-100 py-1 fnt-16 px-2' placeholder='Name' />
              </div>
              <div className='border my-2 rounded'>
              <input type="Email" className='border-none w-100 py-1 fnt-16 px-2' placeholder='Email ID' />
              </div>
              <div className='border my-2 rounded'>
              <input type="text" className='border-none w-100 py-1 fnt-16 px-2' placeholder='Phone No' />
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
            <button className="btn btn-outline-danger py-2 rounded w-100 my-3" onClick={()=>setPage(page-1)}>Back</button>
            <button className="btn-danger border-none ms-2 py-2 text-white rounded w-100 my-3" onClick={()=>setPage(page+1)}>Next</button>
            </div>
          </div>
        </div>
        );
        case 3:
        return (
          <div className={`form-popup rounded px-3 ${show ? 'show' : 'hide'}`}>
          <div className="form-content">
            <div className='d-flex justify-content-between'>
            <div className="h5 mt-4">Great! Tell Us What You Prefer</div>
          <button onClick={handleClose} className='border-none bg-white' style={{height:"30px"}}><i className='fa-solid fa-close text-secondary'/></button>
            </div>
            <div className='my-3'>
              <div>
                <div className="fnt-16 mb-2">Prefered Hotel Category</div>
                <span className='fnt-14'><input type="checkbox"/><span> 5 Star</span></span>
                <span className='fnt-14'><input type="checkbox" className='ms-2'/> 4 Star</span>
                <span className='fnt-14'><input type="checkbox" className='ms-2'/> 3 Star</span>
              </div>
              <div className='border my-2 mt-3 rounded'>
              <input type="number" className='border-none w-100 py-1 fnt-16 px-2' placeholder='No of Adutls' />
              </div>
              <div className='border my-2 rounded'>
              <input type="number" className='border-none w-100 py-1 fnt-16 px-2' placeholder='No of Children' />
              </div>
              <div className='border my-2 rounded'>
              <input type="number" className='border-none w-100 py-1 fnt-16 px-2' placeholder='No of Infants' />
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
            <button className="btn btn-outline-danger me-2 py-2 rounded w-100 my-3" onClick={()=>setPage(page-1)}>Back</button>
            <button className="btn-danger border-none py-2 text-white rounded w-100 my-3" onClick={()=>setPage(page+1)}>Next</button>
            </div>
          </div>
        </div>
        );
        case 4:
          return (
            <div className={`form-popup rounded px-3 ${show ? 'show' : 'hide'}`}>
            <div className="form-content">
              <div className='d-flex justify-content-between'>
              <div className="h5 mt-4">Any Question?</div>
            <button onClick={handleClose} className='border-none bg-white' style={{height:"30px"}}><i className='fa-solid fa-close text-secondary'/></button>
              </div>
              <div className='mt-3 mb-1'>
               <textarea placeholder='Leave a Message' className='outline-none w-100 p-2 border-secondary-subtle rounded' cols="30" rows="10"></textarea>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
              <button className="btn-danger border-none py-2 text-white rounded w-100 mt-1 mb-3" onClick={()=>setPage(1)}>Submit</button>
              </div>
            </div>
          </div>
          );
      default:
        return <div>Please choose a destination</div>;
    }
  }

  return (
    <div>
      {display && (
        render()
      )}
    </div>
  );
};

export default Form2;
