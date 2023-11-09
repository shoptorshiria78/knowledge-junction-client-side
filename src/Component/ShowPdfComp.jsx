import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PropTypes from 'prop-types';

const ShowPdfComp = ({children}) => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages })
    {
        setNumPages(numPages);
    }
    return (
        <div>
            <Document file={children} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}/>
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
};

ShowPdfComp.propTypes = {
    children: PropTypes.node,
   

}

export default ShowPdfComp;


