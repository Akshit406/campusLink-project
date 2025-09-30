import Link from 'next/link';
import Card from '../../../components/Card';

const mockRequest = {
  id: 'REQ-001',
  purpose: 'Annual Cultural Fest',
  amount: 25000,
  status: 'Pending',
  submissionDate: '2024-01-15',
  fileName: 'budget-breakdown.pdf',
  notes: 'This budget covers venue decoration, sound system, and guest artist accommodations for our annual cultural festival.',
  comments: [
    { role: 'Coordinator', comment: 'Looks reasonable, pending DSW approval.', date: '2024-01-16' },
  ],
};

const approvalStages = [
  { stage: 'Submitted', status: 'Completed', date: '2024-01-15' },
  { stage: 'Coordinator', status: 'Completed', date: '2024-01-16' },
  { stage: 'DSW', status: 'In Progress', date: '' },
  { stage: 'Stores', status: 'Pending', date: '' },
  { stage: 'Accounts', status: 'Pending', date: '' },
  { stage: 'Released', status: 'Pending', date: '' },
];

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
  switch (status) {
    case 'Pending':
      return `${baseClasses} bg-yellow-100 text-yellow-700`;
    case 'Approved':
      return `${baseClasses} bg-green-100 text-green-700`;
    case 'Rejected':
      return `${baseClasses} bg-red-100 text-red-700`;
    case 'Released':
      return `${baseClasses} bg-blue-100 text-blue-700`;
    default:
      return `${baseClasses} bg-gray-100 text-gray-700`;
  }
};

const getStageStatus = (status: string) => {
  switch (status) {
    case 'Completed': return 'text-green-600';
    case 'In Progress': return 'text-yellow-600';
    case 'Pending': return 'text-gray-400';
    default: return 'text-gray-600';
  }
};
export default function BudgetDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-6">
        <Link 
          href="/secretary/budget"
          className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base transition-colors inline-block mb-4"
        >
          ← Back to Requests
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#004aad]">Budget Request Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Request Details */}
        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-bold text-[#1e293b] mb-4">Request Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#64748b]">Request ID</label>
                  <p className="text-[#1e293b] font-medium">{mockRequest.id}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#64748b]">Status</label>
                  <span className={getStatusBadge(mockRequest.status)}>
                    {mockRequest.status}
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#64748b]">Purpose</label>
                <p className="text-[#1e293b]">{mockRequest.purpose}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#64748b]">Amount</label>
                  <p className="text-[#1e293b] font-medium">₹{mockRequest.amount.toLocaleString()}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#64748b]">Submission Date</label>
                  <p className="text-[#1e293b]">{mockRequest.submissionDate}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#64748b]">Supporting Document</label>
                <p className="text-[#004aad] cursor-pointer hover:text-[#003380] transition-colors font-medium">
                  {mockRequest.fileName}
                </p>
              </div>
            </div>
          </Card>

          {/* Notes */}
          <Card>
            <h2 className="text-lg sm:text-xl font-bold text-[#1e293b] mb-4">Notes & Justification</h2>
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
              <p className="text-sm sm:text-base">{mockRequest.notes}</p>
            </div>
          </Card>

          {/* Comments */}
          {mockRequest.comments.length > 0 && (
            <Card>
              <h2 className="text-lg sm:text-xl font-bold text-[#1e293b] mb-4">Comments</h2>
              <div className="space-y-3">
                {mockRequest.comments.map((comment, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <p className="text-sm font-medium text-[#1e293b]">{comment.role}</p>
                    <p className="text-xs sm:text-sm text-[#64748b] mt-1">{comment.comment}</p>
                    <p className="text-xs text-[#94a3b8] mt-2">{comment.date}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* Timeline */}
        <Card>
          <h2 className="text-lg sm:text-xl font-bold text-[#1e293b] mb-6">Approval Timeline</h2>
          <div className="space-y-4">
            {approvalStages.map((stage, index) => (
              <div key={stage.stage} className="flex items-start">
                <div className="flex flex-col items-center mr-4">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    stage.status === 'Completed' ? 'bg-green-500 border-green-500' :
                    stage.status === 'In Progress' ? 'bg-yellow-500 border-yellow-500' :
                    'bg-white border-gray-300'
                  }`} />
                  {index < approvalStages.length - 1 && (
                    <div className={`w-0.5 h-8 flex-1 ${
                      stage.status === 'Completed' ? 'bg-green-500' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-[#1e293b]">{stage.stage}</h3>
                      {stage.date && (
                        <p className="text-sm text-[#64748b] mt-1">Date: {stage.date}</p>
                      )}
                    </div>
                    <span className={`text-sm font-medium ${getStageStatus(stage.status)}`}>
                      {stage.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
