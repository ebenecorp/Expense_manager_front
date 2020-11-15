import React, { Component } from "react";
import Form from "../common/form";
import { Joi } from "joi-browser";
import { getExpense, saveExpense } from "../services/expenseService";
import { toast } from "react-toastify";

class CreateExpense extends Component {
  // state = {
  //   data: {
  //     name: "",
  //     description: "",
  //     amount: "",
  //   },
  //   error: {},
  // };

  // async componentDidMount() {
  //   try {
  //     const expenseId = this.props.match.params.id;
  //     if (expenseId === "new") return;

  //     const { data: expense } = await getExpense(expenseId);
  //     this.setState({ data: expense });
  //   } catch (error) {
  //     toast.error("The expense does not exit");
  //     // this.props.params.history.replace("/not-found");
  //   }
  // }

  // schema = {
  //   name: Joi.string().required("Amount"),
  //   description: Joi.string().required("Amount"),
  //   amount: Joi.number().required().label("Amount"),
  // };

  // doSubmit = async () => {
  //   await saveExpense(this.state.data);
  //   // this.props.history.push("/");
  // };

  render() {
    return (
      <h1>Create an Expense</h1>
      // <Form onSubmit={this.handleSubmit}>
      //   {this.renderInput("name", "Expense Name")}
      //   {this.renderInput("description", "Description")}
      //   {this.renderInput("amount", "Amount", "number")}
      // </Form>
    );
  }
}

export default CreateExpense;
