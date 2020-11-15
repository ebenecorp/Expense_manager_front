import http from "./httpService";

const apiEndpoint = "expense";

function expenseURL(id) {
  return `${apiEndpoint}/${id}`;
}
export function getExpenses() {
  return http.get(apiEndpoint);
}
export function getExpense(expenseId) {
  return http.get(expenseURL(expenseId));
}

export function saveExpense(expense) {
  if (expense.id) {
    const body = { ...expense };
    // delete body.id;
    return http.put(expenseURL(expense.id), body);
  }

  return http.post(apiEndpoint, expense);
}

export function deleteExpense(expenseId) {
  return http.delete(expenseURL(expenseId));
}
