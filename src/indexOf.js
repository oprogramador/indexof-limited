function indexOf(longtext, substring, initialLimit, endLimit) {
  if (typeof endLimit === 'undefined') {
    return longtext.indexOf(substring, initialLimit);
  }

  const shorter = longtext.substring(0, endLimit + 1);

  return shorter.indexOf(substring, initialLimit);
}

export default indexOf;
