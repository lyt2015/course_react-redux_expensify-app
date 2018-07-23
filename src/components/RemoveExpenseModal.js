import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement(document.getElementById('app'))

const RemoveExpenseModal = props => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.handleCloseModal}
    contentLabel="Delete Expense?"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Delete Expense?</h3>
    {<p className="modal__body">{props.selectedExpense}</p>}
    <div className="modal__button">
      <button className="button" onClick={props.confirmRemove}>
        Yes
      </button>
      <button className="button" onClick={props.handleCloseModal}>
        No
      </button>
    </div>
  </Modal>
)

export default RemoveExpenseModal
