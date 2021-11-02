// returns the state of *all* features for current user
function fetchAllFeatures() {
  // in reality, this would have been a `fetch` call:
  // `fetch("/api/features/all")`
  return new Promise((resolve) => {
    const sampleFeatures = {
      "extended-summary": true,
      "feedback-dialog": false,
    };
     setTimeout(resolve, 100, sampleFeatures);
    //setTimeout(reject, 100, "Oops error");
  });
}

async function getFeatureState(feature) {
  try {
    const data = await fetchAllFeatures();
    return Boolean(data?.[feature]);
  } catch {
    return false;
  }
}

getFeatureState("extended-sumsssssmary").then(function (isEnabled) {
  console.log(isEnabled);
  if (isEnabled) {
    console.log("showing extended summary");
  } else {
    console.log("showing brief summary");
  }
});

// src/feature-y/feedback-dialog.js
getFeatureState("feedback-dialog").then(function (isEnabled) {
  if (isEnabled) {
    console.log("makeFeedbackButtonVisible");
  }
});
