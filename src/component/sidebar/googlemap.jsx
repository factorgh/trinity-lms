/* eslint-disable jsx-a11y/iframe-has-title */

const GoogleMap = () => {
  return (
    <div className="map-area">
      <div className="maps">
        <iframe
          class="gmap_iframe"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=509&amp;height=345&amp;hl=en&amp;q=No.5 Spintex RoadNext to Cassa Trassaco GL-155-6183 Accra, Ghana&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
