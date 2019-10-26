import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';

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

            <buton type="submit">Submit</buton>
        </Form>
    )
}

const FormSmurf = withFormik({
    handleSubmit(values, {setStatus}){
        console.log('values:', values);
        postData(values);
    },
    mapPropsToValues(name, age, height){
        return{
            name: name || '',
            age:age || '',
            height: height || ''
        }
    }
})(SmurfForm);

const mapStateToProps = (state) => {
    return{
        state
    };
};

export default connect(
    mapStateToProps,
    {postData}
)(FormSmurf);