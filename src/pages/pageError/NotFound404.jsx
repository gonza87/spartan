import "./NotFound404.css";

function NotFound() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pageError">
            <div className="textError">
              <p className="text404">404</p>
              <p className="textSorry">Sorry, the page not found</p>
              <p className="textOther">The link you followed probably broken</p>
              <p className="textOther">or the page has been removed.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
