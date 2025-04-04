import React from 'react';

const Features = () => {
  return (
    <div className="u-margin--60__top">
      <div className="flex justify-center items-center gap-4 my-16 text-gray-900 md:mx-10">
        {/* Card 1 */}
        <div
          className="border border-blue-200 rounded-xl overflow-hidden s-static__card u-margin--10__right u-margin--10__bottom"
          style={{
            width: '200px',
            height: '290px',
            border: '1px solid #f0f0f5',
            boxShadow: '0 4px 8px rgba(0, 0, 0, .12)',
            borderRadius: '24px',
            cursor: 'pointer',
            fontWeight: '400',
            fontSize: '14px',
            color: '#414146',
            WebkitFontSmoothing: 'antialiased',
            WebkitTapHighlightColor: 'rgba(0,0,0,0)',
            fontFamily: 'Lato, Helvetica, Arial, sans-serif',
            position: 'relative',
          }}
        >
          <div className="card card__img--100x290 card-our-offerings">
           
            <div
              className="img-wrapper"
              style={{
                background: '#AFCFED',
                paddingTop: '12px',
                paddingLeft: '35px',
                paddingRight: '35px',
                paddingBottom: '0px',
              }}
            >
              <a href="" tabIndex="-1">
                <span className="LazyLoad is-visible">
                  <img
                    src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png"
                    alt="Instant Video Consultation"
                    className="card_img"
                  />
                </span>
              </a>
            </div>
            <div className="p-4 info">
              <div className="text-center row-1 u-font--bold u-font--20 u-t-c--grey_7">
                <h1 className="text-xl font-medium">Instant Video Consultation</h1>
              </div>
              <div className="text-center row-2 u-font-14 u-t-c--grey_1">
                Connect within 60 secs
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="border border-blue-200 rounded-xl overflow-hidden s-static__card u-margin--10__right u-margin--10__bottom"
          style={{
            width: '200px',
            height: '290px',
            border: '1px solid #f0f0f5',
            boxShadow: '0 4px 8px rgba(0, 0, 0, .12)',
            borderRadius: '24px',
            cursor: 'pointer',
            fontWeight: '400',
            fontSize: '14px',
            color: '#414146',
            WebkitFontSmoothing: 'antialiased',
            WebkitTapHighlightColor: 'rgba(0,0,0,0)',
            fontFamily: 'Lato, Helvetica, Arial, sans-serif',
            position: 'relative',
          }}
        >
          <div className="card card__img--200x290 card-our-offerings">
       
            <div
              className="img-wrapper"
              style={{
                background: '#98CBD6',
                paddingTop: '4px',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingBottom: '0px',
              }}
            >
              <a
                href=""
                tabIndex="-1"
              >
                <span className="LazyLoad is-visible">
                  <img
                    src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png"
                    alt="Find Doctors Near You"
                    className="card_img"
                  />
                </span>
              </a>
            </div>
            <div className="p-4 info">
              <div className="text-center row-1 u-font--bold u-font--20 u-t-c--grey_7">
                <h1 className="text-xl font-medium">Find Doctors Near You</h1>
              </div>
              <div className="text-center row-2 u-font-14 u-t-c--grey_1">
                Confirmed appointments
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="border border-blue-200 rounded-xl overflow-hidden s-static__card u-margin--10__right u-margin--10__bottom"
          style={{
            width: '200px',
            height: '290px',
            border: '1px solid #f0f0f5',
            boxShadow: '0 4px 8px rgba(0, 0, 0, .12)',
            borderRadius: '24px',
            cursor: 'pointer',
            fontWeight: '400',
            fontSize: '14px',
            color: '#414146',
            WebkitFontSmoothing: 'antialiased',
            WebkitTapHighlightColor: 'rgba(0,0,0,0)',
            fontFamily: 'Lato, Helvetica, Arial, sans-serif',
            position: 'relative',
          }}
        >
          <div className="card card__img--200x290 card-our-offerings">
            <a href="" aria-label="Surgeries" className="card-link"></a>
            <div
              className="img-wrapper"
              style={{
                background: '#D5D8FC',
                paddingTop: '16px',
                paddingLeft: '14px',
                paddingRight: '20px',
                paddingBottom: '0px',
              }}
            >
              <a href="" tabIndex="-1">
                <span className="LazyLoad is-visible">
                  <img
                    src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
                    alt="Surgeries"
                    className="card_img"
                  />
                </span>
              </a>
            </div>
            <div className="p-4 info">
              <div className="text-center row-1 u-font--bold u-font--20 u-t-c--grey_7">
                <h1 className="text-xl font-medium">Surgeries</h1>
              </div>
              <div className="text-center row-2 u-font-14 u-t-c--grey_1">
                Safe and trusted surgery centers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;


