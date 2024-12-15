import Input from "./Input";
import {isEmail, isNotEmpty, hasMinLength} from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function StateLogin()  {
    // const [enteredValue, setEnteredValue] = useState({
    //     email: '',
    //     password: '',
    // });

    // const [didEdit, setEdit] = useState({
    //     email: false,
    //     password: false,});

    const {value:emailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, hasError:emailHasError} = useInput('', (value) => {
        return isEmail(value) && isNotEmpty(value);
    });

    const {value: passValue, handleInputChange: handlePassChange, handleInputBlur: handlePassBlur, hasError: passHasError} = useInput('', (value) => hasMinLength(value, 6) && isNotEmpty(value));

    // const emailIsInvalid = didEdit.email && !isEmail(enteredValue.email) && isNotEmpty(enteredValue.email);
    // const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValue.password, 6) && isNotEmpty(enteredValue.password);

    function handleSubmit(event){
        event.preventDefault();
        
        if (emailHasError || passHasError){
            return;
        }

        console.log(emailValue, passValue);
        
      }
    
    // function handleInputChange(identifier, event){
    //     setEnteredValue((prevValues) => ({
    //         ...prevValues,
    //         [identifier]: event.target.value
    //     }));

    //     setEdit((preEdit) => ({
    //         ...preEdit,
    //         [identifier]: false
    //     }))
    // }

    // function handleInputBlur(identifier){
    //     setEdit((preEdit) => ({
    //         ...preEdit,
    //         [identifier]: true
    //     }))
    // }
      
    return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
            {/* <Input label="Email" id="email" type="email" name="email" onBlur ={() => handleInputBlur('email')} onChange={(event) => handleInputChange('email', event)} value = {enteredValue.email} error={emailIsInvalid && 'Please enter a valid email'}/> */}
            <Input label="Email" id="email" type="email" name="email" onBlur ={handleEmailBlur} onChange={handleEmailChange} value = {emailValue} error={emailHasError && 'Please enter a valid email'}/>

            <Input label="Password" id="password" type="password" name="password" onBlur ={handlePassBlur} onChange={handlePassChange} value = {passValue} error={passHasError && 'Please enter a valid password'}/>
            {/* <Input label="Password" id="password" type="password" name="password" onBlur ={() => handleInputBlur('password')} onChange={(event) => handleInputChange('password', event)} value = {enteredValue.password} error={passwordIsInvalid && 'Please enter a valid password'}/> */}
        </div>

        <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
        </p>
    </form>
    );
}