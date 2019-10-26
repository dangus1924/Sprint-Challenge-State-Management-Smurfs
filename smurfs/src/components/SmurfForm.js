import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { postData } from '../actions/smurfing'

function SmurfForm() {
    return(
        <Form>
            <h3>Let's add a Smurf</h3>
            <Field type="text" 
                    name="name" 
                    placeholder="Smurf Name"
                />
            <Field type="number" 
                    name="age"
                    placeholder="Smurf Age"
                />
            <Field type="text" 
                    name="height"
                    placeholder="Smurf Height"
                />
            <button type="submit">Submit</button>
        </Form>
    )
}

const FormikSmurfForm = withFormik({

    handleSubmit(values, {setStatus}){
        console.log('submitting the following values: ', values);
        postData(values);    
    },

    mapPropsToValues(name, age, height){
        return{
            name: name || '',
            age: age || '',
            height: height || ''
        }
    }
})(SmurfForm);

const mapStateToProps = (state) => {
    return {
      state
    };
  };

export default connect(
    mapStateToProps, 
    { postData })
    (FormikSmurfForm);