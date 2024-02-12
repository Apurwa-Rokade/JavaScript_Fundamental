function calculateDeliveryTime(packageType) {
  let deliveryTime;

  switch (packageType.toLowerCase()) {
    case "standard":
      deliveryTime = "3-5 days";
      break;
    case "express":
      deliveryTime = "1-2 days";
      break;
    case "overnight":
      deliveryTime = "next day";
      break;
    default:
      deliveryTime = "not specified";
      break;
  }

  console.log(`Estimated delivery time for ${packageType} package: ${deliveryTime}`);
}

// Test the function with different package types
calculateDeliveryTime("standard");
calculateDeliveryTime("express");
calculateDeliveryTime("overnight");
calculateDeliveryTime("custom"); // Test with an unknown package type
