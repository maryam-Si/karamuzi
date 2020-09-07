import React from 'react';
import  { useEffect ,useState } from 'react';
import { useHistory } from "react-router-dom";
import path from '../../assets/Path.svg';
import { Button, Image, Form ,Modal} from 'semantic-ui-react'
import '../submit-requset/submit-request.styles.scss'
import SchoolInfo from '../school-info/school-info.component';


const SubmitRequest = ({History})=>{
    const [school, setSchool] = useState('');
    const [mobile, setMobile] = useState('');
    const [open, setOpen] = useState(false);
    const [input1, setInput1] = useState(undefined);
    const [input2, setInput2] = useState(undefined);
    const [input3, setInput3] = useState(undefined);
    const [input4, setInput4] = useState(undefined);
    const [flag, setFlag] = useState(true)
    const [info, setInfo]= useState([]);
    useEffect(()=>{
        
        fetch('http://localhost:3000/schools').then((response)=>
        response.json().then((data)=>{
            setInfo(data);
            console.log("response: " +response)
        })
    ).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
    },[]);

    useEffect(() => {
        
     console.log(parseInt(school))
    }, [info,school])
    
    

    const history = useHistory();
    function handleClick() {
        history.push("/");
      }

    return(
        
        <>
        
        
        <Modal
        onClose = {
            () => setOpen(false)
        }
        onOpen={() => setOpen(true)}
        open={open}
        className='modal'
      >
        
        <Modal.Header>کد ارسال شده به {mobile} را وارد کنید</Modal.Header>
        <Modal.Content >
                <Form className='verification'>
                    <Form.Field>
                        <input type="text"
                        id='1'
                        required
                        value={input1}
                        onChange={(e)=>setInput1(e.target.value)}
                        pattern="[0-9]*"
                        maxLength='1'/>
                    </Form.Field>
                    <Form.Field>
                    
                        <input type="text"
                        id='2'
                        maxLength='1'
                        value={input2}
                        onChange={(e)=>setInput2(e.target.value)}
                        required
                        pattern="[0-9]*" 
                        maxLength='1'/>
                    </Form.Field>
                    <Form.Field>
                        <input type="text"
                        id='3'
                        value={input3}
                        onChange={(e)=>setInput3(e.target.value)}
                        required
                        pattern="[0-9]*"
                        maxLength='1' />
                    </Form.Field>  
                    <Form.Field>         
                        <input type="text"
                        id='4'
                        value={input4}
                        onChange={(e)=>setInput4(e.target.value)}
                        required
                        pattern="[0-9]*" 
                        maxLength='1'/>
                    </Form.Field>
            
                

            </Form>

        </Modal.Content>
            
            <Modal.Actions>
            <Image size='medium' src={path} wrapped />  
            <div className='but'>
            <Button basic color='teal' onClick={() => setOpen(false)}>
              بازگشت/ویرایش
            </Button>
            <Button  color='teal' onClick={() => {setOpen(false); setFlag(false); }
          }>
              تایید
            </Button>
            </div>
  
          </Modal.Actions>
           

        
      </Modal>
      
      
        <div className='submit-request'>
            
        
  
            <div className='header-background'></div>  

            {flag?<div className='form-container'>
           
            <p >.برای ثبت  درخواست خرید سامانه برای مدرسه خود اطلاعات زیر را تکمیل کنید</p>

            <Form>
                <Form.Field>
                    <label className='font'>کد مدرسه</label>
                    <input type="text"
                     className="control"
                      required
                      value={school}
                      onChange={(e)=>setSchool(e.target.value)}
                       pattern="[0-9]*"/>
                </Form.Field>
                <Form.Field>
                    <label className='font'>شماره موبایل</label>
                    <input type="text"
                      className="control"
                      value={mobile}
                      onChange={(e)=>setMobile(e.target.value)}
                      required
                       pattern="[0-9]*" />
                </Form.Field>
             
                

            </Form>
            <div className='buttons'>
                    
            <Button basic color='teal' type='submit' onClick={handleClick}>بازگشت  </Button>
            <Button primary type='submit' onClick={()=> setOpen(true)}>دریافت کد تایید</Button>
        
        </div>
        </div>
        :undefined
  }
            {input1 ?
                < SchoolInfo {
                    ...info.find(i => i.id === parseInt(school))
                }
                />
            :undefined}
        </div>
    </>
    
    )

};

export default SubmitRequest;