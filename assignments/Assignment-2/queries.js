db = db.getSiblingDB("collegeDB");

print("\n--- 1. ALL Students ---");
db.Students.find().forEach(student => printjson(student));

print("\n--- 2. CSE-AIML Students ---");
db.Students.find({
    branch: "CSE-AIML"
}).forEach(student => printjson(student));

print("\n--- 3. MARKS GREATER THAN 75 ---");
db.Students.find({
    marks: { $gt: 75 }
}).forEach(student => printjson(student));

print("\n--- 4. SEARCH BY ROLL NUMBER ---");
printjson(
    db.Students.findOne({
        rollNo: "23CM005"
    })
);

print("\n--- 5. THIRD YEAR Students ---");
db.Students.find({
    year: 3
}).forEach(student => printjson(student));

print("\n--- 6. UPDATE MARKS ---");
db.Students.updateOne(
    { rollNo: "23CM001" },
    { $set: { marks: 90 } }
);

printjson(
    db.Students.findOne({
        rollNo: "23CM001"
    })
);

print("\n--- 7. UPDATE EMAIL ---");
db.Students.updateOne(
    { rollNo: "23CM001" },
    { $set: { email: "ravi.kumar@example.com" } }
);

printjson(
    db.Students.findOne({
        rollNo: "23CM001"
    })
);

print("\n--- 8. SORT BY MARKS DESCENDING ---");
db.Students.find()
    .sort({ marks: -1 })
    .forEach(student => printjson(student));

print("\n--- 9. CREATE INDEX ON rollNo ---");
print(
    db.Students.createIndex({
        rollNo: 1
    })
);

print("\n--- 10. DISPLAY INDEXES ---");
printjson(
    db.Students.getIndexes()
);

print("\n--- 11. INDEX SEARCH DEMONSTRATION ---");
printjson(
    db.Students.find({
        rollNo: "23CM005"
    }).explain("executionStats")
);

print("\n--- 12. ABOVE 80 ---");
db.Students.find({
    marks: { $gt: 80 }
}).forEach(student => printjson(student));

print("\n--- 13. BELOW 50 ---");
db.Students.find({
    marks: { $lt: 50 }
}).forEach(student => printjson(student));

print("\n--- 14. HIGHEST SCORING STUDENT ---");
printjson(
    db.Students.find()
        .sort({ marks: -1 })
        .limit(1)
        .next()
);

print("\n--- 15. CSE-AIML Students ---");
db.Students.find({
    branch: "CSE-AIML"
}).forEach(student => printjson(student));

print("\n--- 16. Students SORTED BY MARKS ---");
db.Students.find()
    .sort({ marks: -1 })
    .forEach(student => printjson(student));