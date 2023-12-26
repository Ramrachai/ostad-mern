import express from 'express';

const router = express.Router();


router.get('/ProductBrandList', (req, res) => {
    res.send('ProductBrandList Route');
});

router.get('/ProductCategoryList', (req, res) => {
    res.send('ProductCategoryList Route');
});

router.get('/ProductSliderList', (req, res) => {
    res.send('ProductSliderList Route');
});

router.get("/ProductListByBrand/:BrandID", (req, res) => {
  res.send("ProductListByBrand Route");
});

router.get("/ProductListByCategory/:CategoryID", (req, res) => {
  res.send("ProductListByCategory Route");
});

router.get("/ProductListBySmilier/:CategoryID", (req, res) => {
  res.send("ProductListBySmilier Route");
});

router.get("/ProductListByKeyword/:Keyword", (req, res) => {
  res.send("ProductListByKeyword Route");
});

router.get("/ProductListByRemark/:Remark", (req, res) => {
  res.send("ProductListByRemark Route");
});

router.get("/ProductDetails/:ProductID", (req, res) => {
  res.send("ProductDetails Route");
});

router.get("/ProductReviewList/:ProductID", (req, res) => {
  res.send("ProductReviewList Route");
});

router.get("/UserOTP/:email", (req, res) => {
  res.send("UserOTP Route");
});

router.get("/VerifyLogin/:email/:otp", (req, res) => {
  res.send("VerifyLogin Route");
});

router.get("/UserLogout", (req, res) => {
  res.send("UserLogout Route");
});

router.post("/CreateProfile", (req, res) => {
  res.send("CreateProfile Route");
});

router.post("/UpdateProfile", (req, res) => {
  res.send("UpdateProfile Route");
});

router.get("/ReadProfile", (req, res) => {
  res.send("ReadProfile Route");
});

router.post("/SaveWishList", (req, res) => {
  res.send("SaveWishList Route");
});

router.post("/RemoveWishList", (req, res) => {
  res.send("RemoveWishList Route");
});

router.get("/WishList", (req, res) => {
  res.send("WishList Route");
});

router.post("/SaveCartList", (req, res) => {
  res.send("SaveCartList Route");
});

router.post("/RemoveCartList", (req, res) => {
  res.send("RemoveCartList Route");
});

router.get("/CartList", (req, res) => {
  res.send("CartList Route");
});
