import {useDispatch, useSelector} from "react-redux";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { hideCodePreView } from "../../store/slices/codeSlice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCodePreview() {
    const dispatch = useDispatch();

    const code = useSelector((state) => state.code)

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={code.isShow}
            onHide={() => dispatch(hideCodePreView())}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    GA
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>CODE</h4>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {code.code}
                </SyntaxHighlighter>
            </Modal.Body>
            <Modal.Footer>
                <Button >COPY</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCodePreview;