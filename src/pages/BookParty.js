import React from 'react'
import Form from 'react-bootstrap/Form';

const BookParty = () => {
  return (
<section className='contact-us'>
        <div className='contact-background-image1'>
        <div className="my-5 px-4">
            <h2 className="text-center text-success mt-3">Cheekies Book A Party</h2>
            <h1 className="fw-bold h-font text-center fw-bold text-danger">HAVE A PIZZA-MAZING PARTY WITH US!</h1>
            <h4 className="text-center text-success mt-3">Make a celebrations event more special with cheekies!</h4>
        </div>
            <div className='row'>
            <div className="col-lg-2 col-md-3 mb-5 px-4"> </div>
            <div className="col-lg-9 col-md-8 mt-6">
                    <div className="bg-white rounded shadow mb-6 p-4" >
                    <Form>
                    <div className="mb-3">
                    <Form.Label className='form-label'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                    </div> 
                    <div className="mb-3">
                    <Form.Label className='form-label'>Mobile Number:</Form.Label>
                    <Form.Control type="number" placeholder="Mobile Number" />
                    </div> 
                    <div className="mb-3">
                    <Form.Label className='form-label'>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="Email Address" />
                    </div>
                    <Form.Select aria-label="form-select">
                    <option>Type of Event</option>
                    <option value="1">Birthday Party</option>
                    <option value="2">Company Party</option>
                    <option value="3">Multiple Deliveries</option>
                    <option value="4">Christmas Party</option>
                    <option value="4">Baptismal</option>
                    <option value="5">Wedding</option>
                    <option value="6">In-Store Birthday Party</option>
                    <option value="6">Others</option>
                  </Form.Select>
                    <Form.Label className='form-label'>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Please Your Message Here." />
                    <div class="col text-end">
                    <button type="submit" class="btn btn-success custom-bg mt-3 mb-3 p-3 px-4">SUBMIT</button>
                    </div>
                    </Form>
                    </div>
                </div>
              </div>
            </div>
        </section>
  )
}

export default BookParty
