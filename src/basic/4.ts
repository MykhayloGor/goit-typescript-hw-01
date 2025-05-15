function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

type Error = {
    message: string;
}
function customError() :never{
    throw new Error("Error");
}
