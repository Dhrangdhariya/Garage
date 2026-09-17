const Review = require("../models/Review");
const Work = require("../models/Work");
exports.addWork = async (req, res) => {
    try {
        const { name, year, problem, specific } = req.body;
        const lastWork = await Work.findOne().sort({
            inquiryNo: -1
        });
        const inquiryNo = lastWork
            ? lastWork.inquiryNo + 1
            : 1000;
        const work = await Work.create({
            userId: req.user.id,
            name,
            year,
            date: new Date(),
            problem,
            specific,
            inquiryNo
        });
        res.status(201).json(work);
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};

exports.getUserWorks = async (req, res) => {
    const works = await Work.find({ userId: req.user.id })
        .sort({ inquiryNo: -1 });
    res.json(works);
};

exports.confirmWork = async (req, res) => {
    const work = await Work.findByIdAndUpdate(
        req.params.id,
        {
            status: "Confirmed",
        },
        {
            new: true,
        }
    );

    res.json(work);
};

exports.rejectWork = async (req, res) => {
    const work = await Work.findByIdAndUpdate(
        req.params.id,
        {
            status: "Rejected",
        },
        {
            new: true,
        }
    );

    res.json(work);
};

exports.getAllWorks = async (req, res) => {
    const works = await Work.find()
        .populate("userId", "name email")
        .sort({ date: -1 });

    res.json(works);
};
exports.createReview = async (req, res) => {
    try {
        const { rating, comment } = req.body;

        // Check if user has at least one completed service
        const completedWork = await Work.findOne({
            userId: req.user.id,
            status: "Completed",
        });

        if (!completedWork) {
            return res.status(403).json({
                message: "You can review only after a completed service.",
            });
        }

        // Prevent multiple reviews
        const alreadyReviewed = await Review.findOne({
            userId: req.user.id,
        });

        if (alreadyReviewed) {
            return res.status(400).json({
                message: "You have already submitted a review.",
            });
        }

        const review = await Review.create({
            userId: req.user.id,
            rating,
            comment,
        });

        res.status(201).json(review);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.getReviews = async (req, res) => {
    try {

        const reviews = await Review.find()
            .populate("userId", "name")
            .sort({ createdAt: -1 });

        res.json(reviews);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};