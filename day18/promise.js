const a = new Promise((resolve, reject) => {
  const b = 1;
  if (b == 2) {
    resolve({
      message: "success",
    });
  } else {
    reject({
      message: "fail",
    });
    // reject({
    //   message: "fail",
    // });
  }
});

a.then((successCase) => {
  console.log("success block", successCase);
}).catch((failedCase) => {
  console.log("failed block", failedCase);
});
