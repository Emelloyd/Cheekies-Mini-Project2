import Form from 'react-bootstrap/Form';


function ContactUs(){
    return(
        <section className='contact-us'>
        <div className='contact-background-image'>
        <div className="my-5 px-4">
            <h1 className="fw-bold h-font text-center fw-bold text-danger">Get in touch with us!</h1>
            <h4 className="text-center text-danger mt-3">We're here to help you.</h4>
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
                    <Form.Label className='form-label'>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" />
                    </div> 
                    <div className="mb-3">
                    <Form.Label className='form-label'>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                    </div>
                    <Form.Check label="I need help regarding my transactions" />
                    <Form.Control as="textarea" placeholder="Please Your Message Here." />
                    <div class="col text-end">
                    <button type="submit" class="btn btn-danger custom-bg mt-3 mb-3 p-3 px-4">SUBMIT</button>
                    </div>
                    </Form>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;