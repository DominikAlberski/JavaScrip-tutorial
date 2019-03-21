String.prototype.blank = function() {
  if (this.match(/^\s*$/)) { return true; } else { return false } 
}
