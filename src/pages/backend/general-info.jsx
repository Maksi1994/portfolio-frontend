import BackendLayout from '../../layouts/BackendLayout';
import {Button, Form} from 'react-bootstrap';
import {useEffect, useReducer, useRef, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';
import Avatar from '../../components/ui/Avatar/Avatar';
import Head from 'next/head';

function formReducer(state, event) {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
};

function GeneralInfo(props) {
    const [formData, setFormData] = useReducer(formReducer, props.data);
    const [wasSubmitted, setSubmitting] = useState(false);
    const [isSaving, setSaving] = useState(false);
    const editorRef = useRef(null);
    const [showBioEditor, setBioShowing] = useState(false);
    const [avatarData, setAvatarData] = useState(props.avatarData || {});
    const [bio, setBio] = useState('AAA');

    const onSubmitForm = (e) => {
        const form = e.currentTarget;
        const description = bio;
        e.preventDefault();
        setSubmitting(true);
        if (form.checkValidity() && !!description) {
            setSaving(true);
            setTimeout(() => {
                setSaving(false);
            }, 1000);
        }
    };

    const initEditor = (editor) => {
        editorRef.current = editor;
    }

    const onChangeBio = (content) => {
        setBio(content);
    }

    const onAvatarChange = (data) => {
        setAvatarData(data);
    }

    useEffect(() => {
        setBioShowing(true);
    }, []);

    return <BackendLayout>
        <Head>
            <title>Backend / General Info</title>
        </Head>
        <div className="w-75 mx-auto justify-content-center d-flex">
            {
                !isSaving ?
                  <>
                    <div className="photo pt-2 w-50">
                        <Avatar fieldName="User Image" avatarData={avatarData} changeCropData={onAvatarChange}></Avatar>
                    </div>
                    <Form className="w-50" noValidate onSubmit={onSubmitForm}>
                      <Form.Group className="mb-3">
                          <Form.Label>First Name <span className="required-mark">*</span></Form.Label>
                          <Form.Control isInvalid={wasSubmitted ? !formData.first_name : null} required value={formData.first_name} onChange={setFormData} name="first_name" type="text" placeholder="Ivan" />
                          <Form.Control.Feedback type="invalid">
                              Please type a first name.
                          </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>Last Name <span className="required-mark">*</span></Form.Label>
                          <Form.Control isInvalid={wasSubmitted ? !formData.last_name : null} required value={formData.last_name} onChange={setFormData} name="last_name" type="text" placeholder="Ivanov" />
                          <Form.Control.Feedback type="invalid">
                              Please type a last name.
                          </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>Gender <span className="required-mark">*</span></Form.Label>

                          <Form.Select value={formData.gender} onChange={setFormData} required name="gender" className="mb-3" aria-label="Any">
                              <option value="1">Male</option>
                              <option  required value="2">Female</option>
                          </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>Age <span className="required-mark">*</span></Form.Label>
                          <Form.Control  required value={formData.age} isInvalid={wasSubmitted ? !formData.age : null} onChange={setFormData} name="age" type="number" placeholder="18" />
                          <Form.Control.Feedback type="invalid">
                              Please type age.
                          </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>Profession <span className="required-mark">*</span></Form.Label>

                          <Form.Control  required value={formData.position} isInvalid={wasSubmitted ? !formData.position : null} onChange={setFormData} name="position" type="text" placeholder="UI/UX Designer" />

                          <Form.Control.Feedback type="invalid">
                              Please type position name.
                          </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>From <span className="required-mark">*</span></Form.Label>

                          <Form.Control  required value={formData.from} isInvalid={wasSubmitted ? !formData.from : null} onChange={setFormData} name="from" type="text" placeholder="Chicago, US" />

                          <Form.Control.Feedback type="invalid">
                              Please type origin place.
                          </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3">
                          <Form.Label>Lives In <span className="required-mark">*</span></Form.Label>

                          <Form.Control  required value={formData.current_live_place} isInvalid={wasSubmitted ? !formData.current_live_place : null}  onChange={setFormData} name="current_live_place" type="text" placeholder="New York, US" />

                          <Form.Control.Feedback type="invalid">
                              Please type current living place.
                          </Form.Control.Feedback>
                      </Form.Group>
                        {
                            showBioEditor &&
                            <Form.Group className={'mb-5 ' +  (wasSubmitted && !bio  ? 'invalid-editor': '')}>
                                <Form.Label>Description <span className="required-mark">*</span></Form.Label>
                                <Editor
                                className="is-invalid"
                                apiKey='d2rr9jx6cgkoxhh8bjp9t2oyyly75c99fwvpwtsp43odiubl'
                                onInit={(evt, editor) => initEditor(editor)}
                                onEditorChange={onChangeBio}
                                value={bio}
                                init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                'advlist autolink lists link image charmap print preview anchor'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                'h1 h5 bold | alignleft aligncenter ' +
                                'alignright alignjustify',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                                {
                                    wasSubmitted && !bio ?  <div className="invalid-feedback">
                                        Please type current living place.
                                    </div> : null
                                }
                            </Form.Group>
                        }
                        { !editorRef.current &&
                            <Spinner className="mx-auto d-block" animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        }
                      <Button variant="success" className="ms-auto d-block mt-3" type="submit">Save</Button>
                  </Form>
                  </>
                :  <Spinner className="mt-5" animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                  </Spinner>
            }

        </div>

    </BackendLayout>
};

GeneralInfo.auth = true;

export async function getServerSideProps() {
    const data = {
        first_name: 'Maxim',
        last_name: 'Karpinka',
        age: 27,
        gender: 1,
        position: 'Frontend Developer',
        from: 'Lviv',
        current_live_place: 'Lviv',
    };

    return {
        props: {
            data
        }
    }
}

export default GeneralInfo;
