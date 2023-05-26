import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function FootFunc() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center p-4 pb-5'>
      </section>
      
      <section className='text-md-start mt-5 pt-1 text-light'>
        <MDBContainer className='text-center text-md-start mt-10'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                HDPZ
              </h6>
              <p>
                <a href='https://github.com' className='text-reset' target='_blank' rel='noreferrer'>
                  <MDBIcon fab icon='github' className='me-2' />
                  GitHub
                </a>
              </p>
              <p>
                <a href='https://www.youtube.com' className='text-reset' target='_blank' rel='noreferrer'>
                  <MDBIcon fab icon='youtube' className='me-2' />
                  YouTube
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
