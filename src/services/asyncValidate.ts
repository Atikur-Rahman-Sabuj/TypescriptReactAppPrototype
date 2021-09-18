export const clientCodeAsyncValidate = (values) => {
   console.log(values.asyncValidate);

   if (values.asyncValidate === "" || !values.asyncValidate) {
      return new Promise(function (resolve, reject) {
         resolve("");
      });
   }

   return new Promise(function (resolve, reject) {
      if (values.asyncValidate === "good") {
         resolve("");
      } else {
         reject({ asyncValidate: "not good value" });
      }
   });
};
