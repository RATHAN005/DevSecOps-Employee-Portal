import React from "react";
import Modal from "../common/Modal";
import Button from "../common/Button";

/**
 * DeleteEmployeeModal — confirmation dialog before deletion
 * @param {object} props
 * @param {boolean} props.isOpen
 * @param {function} props.onClose
 * @param {object|null} props.employee
 * @param {function} props.onConfirm
 * @param {boolean} props.loading
 */
const DeleteEmployeeModal = ({ isOpen, onClose, employee, onConfirm, loading = false }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Employee" size="sm">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <svg className="h-6 w-6 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-red-700 dark:text-red-400">
            This action <strong>cannot be undone</strong>. The employee and all associated data will be permanently removed.
          </p>
        </div>
        {employee && (
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Are you sure you want to delete <strong>{employee.name}</strong>?
          </p>
        )}
        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="danger" loading={loading} onClick={() => onConfirm?.(employee)}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteEmployeeModal;
