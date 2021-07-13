import {Form, FormGroup, Label, Input, Button,FormFeedback, Alert} from 'reactstrap';
import {useState} from 'react';
import {useDispatch} from "react-redux";

const BlogForm = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [date, setDate] = useState("");
    const [isTitleValid, setIsTitleValid] = useState("PRISTINE");
    const [isBodyValid, setIsBodyValid] = useState("PRISTINE");    
    const [isDateValid, setIsDateValid] = useState("PRISTINE");
    const [hasError, setHasError] = useState(false)
    const dispatch = useDispatch();

    const titleChange = (e) => {
        setTitle(e.target.value)
        if(e.target.value.length<=0) setIsTitleValid("INVALID"); else setIsTitleValid("VALID");
        if(e.target.value && body && date)  setHasError(false);
    }
    const bodyChange = (e) => {
        setBody(e.target.value)
        if(e.target.value.length<=0) setIsBodyValid("INVALID"); else setIsBodyValid("VALID")
        if(title && e.target.value && date)  setHasError(false);
    }
    const dateChange = (e) => {
        setDate(e.target.value)
        if(e.target.value.length<=0) setIsDateValid("INVALID"); else setIsDateValid("VALID")
        if(title && body && e.target.value)  setHasError(false);
    }
    const clear = () => {
        setTitle("");
        setBody("");
        setDate("");
        setHasError(false);
        setIsBodyValid("PRISTINE");
        setIsTitleValid("PRISTINE");
        setIsDateValid("PRISTINE");
    }
    const submit = (e) => {
        e.preventDefault();
        if(isTitleValid=="VALID" && isBodyValid=="VALID" && isDateValid=="VALID")  {
            console.log(title);
            console.log(body);
            console.log(date);

            const formData = {title,body,date}
            fetch("/mongo/add",{
                method:'POST',
                body:JSON.stringify(formData),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
            })
            .then(res => res.json())
            .then(res => {
                console.log("Res", res);
                dispatch({
                    type:"UPDATE_BLOG",
                    data: {
                       _id: res._id,title: res.title, body:res.body,date:res.date
                    }
                  })
                  clear();
            });
        }else {
            setHasError(true)
        }
    }
    return (
        <Form onSubmit={e=>submit(e)}> 
            {hasError && <Alert color="danger">FORM HAS AN ERROR</Alert>}
            <FormGroup>
                <Label for="title">Title</Label>
                <Input invalid={isTitleValid === "INVALID"} name="title" type="text" value={title} onChange={e=>titleChange(e)}/>
                <FormFeedback>Title is required.</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="body">Body</Label>
                <Input invalid={isBodyValid === "INVALID"} name="body" type="text" value={body} onChange={e => bodyChange(e)}/>
                <FormFeedback>Body is required</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="Date">Date</Label>
                <Input invalid={isDateValid === "INVALID"} name="Date" type="Date" value={date} onChange={e => dateChange(e)}/>
                <FormFeedback>Date is required</FormFeedback>
            </FormGroup>
                <Button type="submit" color="primary">Add Post</Button>
                <Button type="reset" color="danger" className="ms-1" onClick={clear}>Reset</Button>
        </Form>
    )
}

export default BlogForm;