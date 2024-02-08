const crypto = require("crypto");

const base62Alphabet = "ihavecompletedtheassignmentasperthegiventimeline";

const generateShortId = () => {
  let shortId = "";
  const length = 6;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * base62Alphabet.length);
    shortId += base62Alphabet.charAt(randomIndex);
  }

  return shortId;
};

module.exports = { generateShortId };
