/**
	Name: Deepak Singh
	File: main.js
	Date: 12/12/2023
	In the assessment for this module, we present to you a simple site with a number of accessibility issues that you need to diagnose and fix.
*/
// functionality for showing/hiding the comments section

// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};
  
// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const nameLabel = document.createElement('span');
  const commentLabel = document.createElement('span');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  // Make author and message tabbable
  namePara.setAttribute("tabindex", "0");
  commentPara.setAttribute("tabindex", "0");

  // Give author and comment labels
  nameLabel.textContent = "Author: ";
  commentLabel.textContent = "Comment: ";

  namePara.appendChild(nameLabel);
  commentPara.appendChild(commentLabel);
}