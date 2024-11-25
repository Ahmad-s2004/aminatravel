import React, { useEffect, useRef, useState } from 'react'
const Form = () => {

  const [anytime, setAnytime] = useState(true)
  const [value, setValue] = useState(0)
  const [comp, setComp] = useState(1)
  const dateInputRef = useRef(null);

  const handleButtonClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };
  const monthInputRef = useRef(null);

  const handleMonthClick = () => {
    if (monthInputRef.current) {
      monthInputRef.current.showPicker(); 
    }
  };

  const render = () => {
    switch (comp) {
      case 1:
        return (
          <div className="border w-75 px-4 py-5 mx-auto">
            <div className='text-center'><img src="./assets/location.png" alt="" /></div>
            <div className="h5 text-center text-green fw-semibold">Where do you want to go?</div>
            <div className='py-2'>
              <lable className="d-block fnt-14 fw-semibold pb-1 text-secondary">To</lable>
              <div className="d-flex align-items-center border border-secondary-subtle p-2 w-100">
                <i className="fa-solid fa-location-dot ms-2" />
                <input type="text" className="px-4 border-none fnt-13" placeholder='To' />
              </div>
            </div>
            <div className='py-2'>
              <lable className="d-block fnt-14 fw-semibold pb-1 text-secondary">From</lable>
              <div className="d-flex align-items-center border border-secondary-subtle p-2 w-100">
                <i className="fa-solid fa-location-dot ms-2" />
                <input type="text" className="px-4 border-none fnt-13" placeholder='From' />
              </div>
            </div>
            <div className='py-2'>
              {
                anytime ?
                  <>
                    <lable className="d-block fnt-14 fw-semibold pb-1 text-secondary">Departure Date <span className='fnt-11 fw-normal'> (Choose any)</span></lable>
                    <div className="d-flex align-items-center p-2 w-100">
                      <button className="btn btn-secondary fw-semibold fnt-14 w-100 mx-1 rounded-0" onClick={handleButtonClick}>Fixed</button>
                      <input
                        type="date"
                        ref={dateInputRef}
                        style={{ visibility: "hidden", position: "absolute" }}
                      />
                      <button className="btn btn-secondary fw-semibold fnt-14 w-100 mx-1 rounded-0" onClick={handleMonthClick}>Flexible</button>
                      <input
                        type="month"
                        ref={monthInputRef}
                        style={{ visibility: "hidden", position: "absolute" }}
                      />
                      <button className="btn btn-secondary fw-semibold fnt-14 w-100 mx-1 rounded-0" onClick={() => setAnytime(!anytime)}>Anytime</button>
                    </div>
                  </>
                  :
                  <div className='row'>
                    <div className='col-8'>
                      <lable className="d-block fnt-14 fw-semibold pb-1 text-secondary">Departure Date <span className='fnt-11 fw-normal'> (Choose any)</span></lable>
                      <div className="d-flex align-items-center justify-content-between p-2 w-100 border">
                        <div>AnyTime</div> <button className='border-none bg-white' onClick={() => setAnytime(!anytime)}><i className='fa-solid fa-xmark' /></button>
                      </div>
                    </div>
                    <div className='col-4'>
                      <lable className="d-block fnt-14 fw-semibold pb-1 text-secondary">Days</lable>
                      <div className="d-flex justify-content-between align-items-center p-2 w-100 border">
                        <button className='border-none bg-white' onClick={() => { value < 1 ? setValue(value) : setValue(value - 1) }}><i className='fa-solid fa-minus' /></button>
                        <span>{value}</span>
                        <button className='border-none bg-white' onClick={() => setValue(value + 1)}><i className='fa-solid fa-plus' /></button>
                      </div>
                    </div>
                  </div>
              }
            </div>
            <div className='px-1'>
              <button onClick={() => setComp(comp + 1)} className="btn btn-danger w-100 rounded-1 fnt-13 fw-semibold py-2">Next</button>
            </div>
          </div>);

      case 2:
        return (
          <div className="border w-75 px-4 py-5 mx-auto">
            <div className='text-center'><img src="./assets/contact.png" alt="" /></div>
            <div className="h5 text-center text-green fw-semibold">How do we contact you?</div>
            <div className='py-2'>
              <lable className="d-block fnt-14 fw-semibold pb-1 text-secondary">Email ID</lable>
              <div className="d-flex align-items-center border border-secondary-subtle p-2 w-100">
                <i className="fa-solid fa-envelope ms-2" />
                <input type="email" className="px-4 border-none fnt-13" placeholder='Enter Your Email ID' />
              </div>
            </div>
            <div className='py-2'>
              <lable className="d-block fnt-14 fw-semibold pb-1 text-secondary">Phone No</lable>
              <div className='d-flex align-items-center '>
                <div className=" border border-secondary-subtle p-2 me-1" style={{ width: "20%" }}>
                  <input type="text" defaultValue="+92" id='options-input' list="options" className='w-100 border-none fnt-13' />
                  <datalist id="options">
                    <option value="+91" />
                    <option value="+92" />
                    <option value="+93" />
                    <option value="+94" />
                  </datalist>
                </div>
                <div className="d-flex align-items-center border border-secondary-subtle p-2 mx-1" style={{ width: "80%" }}>
                  <i className='fa-solid fa-phone' />
                  <input type="text" className="ms-2 border-none fnt-13 w-100" placeholder='Enter Your Phone Number' />
                </div>
              </div>
              <div className="d-flex algin-items-center mt-2 ms-2">
                <input type="checkbox" style={{ width: "16px" }} />
                <i className='fa-brands fa-whatsapp text-green px-2 fnt-18 mt-1' /> <div className="fnt-14">Send trip updates on WhatsApp</div>
              </div>
            </div>
            <div className='px-1 mt-5 d-flex'>
              <span className='w-25'>
                <button className="btn btn-outline-danger rounded-1 w-100 mx-auto w-25" onClick={() => setComp(comp - 1)}>Back</button>
              </span>
              <span className='w-75 ps-2'>
                <button className="btn btn-danger rounded-1 w-100 mx-auto" onClick={() => setComp(comp + 1)}>Next</button>
              </span>
            </div>
          </div>);

      case 3:
        return (
          <div className="border w-75 px-4 py-5 mx-auto">
            <div className="h5 text-center fw-semibold text-green ms-1">Great! Tell Us What You Prefer</div>
            <div className='py-2'>
              <lable className="d-block fnt-14 fw-semibold pb-1 text-secondary-emphasis ms-1">Prefered Hotel Category <span className='fnt-11 text-secondary'> (Rating)</span> </lable>
              <div className="d-flex justify-content-evenly align-items-center p-2 w-100">
                <span>
                  <input type="checkbox" style={{ width: "20px" }} />
                  <span className="fnt-14"> 5 Star</span>
                </span>
                <span>
                  <input type="checkbox" style={{ width: "20px" }} />
                  <span className="fnt-14"> 4 Star</span>
                </span>
                <span>
                  <input type="checkbox" style={{ width: "20px" }} />
                  <span className="fnt-14"> 3 Star</span>
                </span>
              </div>
              <div className="d-flex align-items-center">
                <div className='col px-1'>
                  <lable className='fnt-14 text-secondary-emphasis border-secondary-subtle fw-semibold'>Adults <span className='fnt-11 text-secondary'> (12+ yrs)</span></lable>
                  <input type="number" className='d-block w-100 outline-none' />
                </div>
                <div className='col px-1'>
                  <lable className='fnt-14 text-secondary-emphasis border-secondary-subtle fw-semibold'>Infants <span className='fnt-11 text-secondary'> (0-2 yrs)</span></lable>
                  <input type="number" className='d-block w-100 outline-none' />
                </div>
                <div className='col px-1'>
                  <lable className='fnt-14 text-secondary-emphasis border-secondary-subtle fw-semibold'>Children <span className='fnt-11 text-secondary'> (2-12 yrs)</span></lable>
                  <input type="number" className='d-block w-100 outline-none' />
                </div>
              </div>
              <div className="mt-3">
                <div className="fnt-14 text-secondary-emphasis fw-semibold ms-1 my-1">I Will Book</div>
                <div className="d-flex">
                  <span className="w-100 ps-1"><button className="btn btn-secondary fnt-13 fw-semibold w-100 rounded-0 mx-0 px-0">In Next 2-3 Days</button></span>
                  <span className="w-100 ps-1"><button className="btn btn-secondary fnt-13 fw-semibold w-100 rounded-0 mx-0 px-0">In This Week</button></span>
                  <span className="w-100 ps-1"><button className="btn btn-secondary fnt-13 fw-semibold w-100 rounded-0 mx-0 px-0">In This Month</button></span>
                </div>
                <div className="d-flex mt-1">
                  <span className="w-100 ps-1"><button className="btn btn-secondary fnt-13 fw-semibold w-100 rounded-0 mx-0 px-0">Later Sometime</button></span>
                  <span className="w-100 ps-1"><button className="btn btn-secondary fnt-13 fw-semibold w-100 rounded-0 mx-0 px-0">Just Checking Price</button></span>
                </div>
              </div>
              <div className='px-1 mt-4 d-flex'>
                <span className='w-25'>
                  <button className="btn btn-outline-danger rounded-1 w-100 mx-auto w-25" onClick={() => setComp(comp - 1)}>Back</button>
                </span>
                <span className='w-75 ps-2'>
                  <button className="btn btn-danger rounded-1 w-100 mx-auto" onClick={() => setComp(comp + 1)}>Next</button>
                </span>
              </div>
            </div>
          </div>);

      case 4:
        return (
          <div className="border w-75 px-4 py-5 mx-auto">
            <div className="h5 text-center fw-semibold text-green ms-1">Almost Done!</div>
            <div className='py-2'>
              <div className="mt-3">
                <div className="fnt-14 text-secondary-emphasis fw-semibold ms-1 my-1">Which type of package would you prefer?</div>
                <div className="d-flex mt-1">
                  <span className="w-100 ps-1"><button className="btn btn-secondary fw-semibold fnt-13 w-100 rounded-0 px-0 mx-0 text-center">Customizable Package</button></span>
                  <span className="w-100 ps-1"><button className="btn btn-secondary fw-semibold fnt-13 w-100 rounded-0 px-0 mx-0 text-center">Bestselling Standard Package</button></span>
                </div>
              </div>
              <div className="mt-3">
                <div className="fnt-14 text-secondary-emphasis fw-semibold ms-1 my-1">Preferred time to call</div>
                <div className="d-flex">
                  <span className="w-100 ps-1"><button className="btn btn-secondary fw-semibold fnt-13 w-100 rounded-0 px-0 mx-0">Anytime</button></span>
                  <span className="w-100 ps-1"><button className="btn btn-secondary fw-semibold fnt-13 w-100 rounded-0 px-0 mx-0">10 - 12 PM</button></span>
                  <span className="w-100 ps-1"><button className="btn btn-secondary fw-semibold fnt-13 w-100 rounded-0 px-0 mx-0">12 - 2 PM</button></span>
                </div>
                <div className="d-flex mt-1">
                  <span className="w-100 ps-1"><button className="btn btn-secondary fw-semibold fnt-13 w-100 rounded-0 px-0 mx-0">2 - 4 PM</button></span>
                  <span className="w-100 ps-1"><button className="btn btn-secondary fw-semibold fnt-13 w-100 rounded-0 px-0 mx-0">4 - 6 PM</button></span>
                  <span className="w-100 ps-1"><button className="btn btn-secondary fw-semibold fnt-13 w-100 rounded-0 px-0 mx-0">After 6</button></span>
                </div>
              </div>
              <div className="mt-3">
                <div className="fnt-14 text-secondary-emphasis fw-semibold ms-1 my-1">Leave a Message</div>
                <div className='px-1 border-secondary'>
                  <textarea className='w-100 border-secondary-subtle outline-none px-2' cols="30" rows="2"></textarea>
                </div>
              </div>

              <div className='d-flex justify-content-between px-1 mt-4'>
                <span className='w-25'>
                  <button className="btn btn-outline-danger rounded-1 w-100 mx-auto w-25" onClick={() => setComp(comp - 1)}>Back</button>
                </span>
                <span className='w-75 ps-2'>
                  <button className="btn btn-danger rounded-1 w-100 mx-auto" onClick={() => setComp(comp + 1)}>Next</button>
                </span>
              </div>
            </div>
          </div>);
      case 5:
        return (
          <div className="border w-75 px-4 py-5 mx-auto">
            <div className="h5 text-center fw-semibold text-green">Thank You for Booking</div>
            <p className='fw-semibold text-light-emphasis'>Your booking is confirmed, and we will send all the details to your provided email and phone number. If you need further assistance, feel free to contact us.</p>
            <div className='px-1 mt-5 d-flex justify-content-center'>
              <button className="btn btn-danger rounded-1 fnt-13 fw-semibold py-2 w-50 border-none" onClick={() => setComp(1)}>Return</button>
            </div>
          </div>
        );
    }
  }

  const render2 = () => {
    switch (comp) {
      case 1:
        return (
          <div className="col-lg-6 col-12 text-center py-5">
            <div>
              <img src="./assets/person.png" alt="" />
            </div>
            <div className="h2 fw-bold w-75 mx-auto text-green">Our experts would love to create a package just for you!</div>
            <p className='fw-semibold fnt-18 text-light-emphasis'>Fill in your requirements here </p>
          </div>
        );
      case 2:

        return (
          <div className="col-lg-6 col-12 text-center py-5">
            <div className="h2 fw-bold w-75 mx-auto text-green">Our experts would love to create a package just for you!</div>
            <p className='fw-semibold fnt-18 text-light-emphasis'>Fill in your requirements here </p>
          </div>
        );
      case 3:

        return (
          <div className="col-lg-6 col-12 text-center py-5">
            <div>
              <img src="./assets/person.png" alt="" />
            </div>
            <div className="h2 fw-bold w-75 mx-auto text-green">Well Done!</div>
            <p className='fw-semibold fnt-18 text-light-emphasis w-50 mx-auto'>Now, fill in these details so our experts can get you the perfect holiday. </p>
          </div>
        );
      case 4:
        return (
          <div className="col-lg-6 col-12 text-center py-5">
            <div>
              <img src="./assets/person.png" alt="" />
            </div>
            <div className="h2 fw-bold w-75 mx-auto text-green">Well Done!</div>
            <p className='fw-semibold fnt-18 text-light-emphasis w-50 mx-auto'>Now, fill in these details so our experts can get you the perfect holiday. </p>
          </div>
        );
      case 5:
        return (
          <div className="col-lg-6 col-12 text-center py-5">
            <div>
              <img src="./assets/person.png" alt="" />
            </div>
            <div className="h2 fw-bold w-75 mx-auto text-green">Thank You!</div>
            <p className='fw-semibold fnt-18 text-light-emphasis w-50 mx-auto'>Your request has been submitted. We will contact you within 24 hours. </p>
          </div>
        );
    }
  }
  

  return (
    <div>
      <div className="container">
        <div className="row d-flex align-items-center ">
          {render2()}
          <div className="col-lg-6 col-12 py-5">
            {render()}



          </div>
        </div>
      </div>
    </div>
  )
}

export default Form