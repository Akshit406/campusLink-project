import Link from 'next/link';

const mockEventDetail = {
  id: 'EVT-001',
  name: 'Annual Cultural Fest 2024',
  date: '2024-02-15',
  venue: 'Main Auditorium',
  organizer: 'Cultural Club',
  status: 'Upcoming',
  theme: 'Cultural Diversity and Unity',
  notes: 'A grand celebration of cultural diversity featuring performances, food stalls, and traditional arts from different regions. The event aims to promote unity and cultural exchange among students.',
  fileName: 'event_proposal_cultural_fest.pdf',
  submittedBy: 'John Doe',
  submissionDate: '2024-01-10',
  expectedCrowd: 500,
  duration: 6,
};

const approvalStages = [
  { stage: 'Submitted', status: 'Completed', date: '2024-01-10', comment: 'Event proposal submitted for review' },
  { stage: 'Coordinator Review', status: 'In Progress', date: '2024-01-12', comment: 'Under review by club coordinator' },
  { stage: 'DSW Approval', status: 'Pending', date: '', comment: '' },
  { stage: 'Final Status', status: 'Pending', date: '', comment: '' },
];

const comments = [
  { role: 'Coordinator', comment: 'The event proposal looks promising. Need to confirm venue availability and security arrangements.', date: '2024-01-12' },
  { role: 'Event Head', comment: 'All preparations are on track. Volunteer teams have been assigned.', date: '2024-01-11' },
];

const getStatusBadge = (status: string) => {
  const baseClasses = 'px-3 py-1 rounded-full text-sm font-medium';
  switch (status) {
    case 'Upcoming':
      return `${baseClasses} bg-blue-100 text-blue-700`;
    case 'Ongoing':
      return `${baseClasses} bg-yellow-100 text-yellow-700`;
    case 'Completed':
      return `${baseClasses} bg-green-100 text-green-700`;
    case 'Cancelled':
      return `${baseClasses} bg-red-100 text-red-700`;
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

export default function EventDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <Link 
          href="/secretary/events"
          className="border border-[#004aad] text-[#004aad] hover:bg-[#e6ecff] rounded-lg px-4 py-2 transition-colors inline-block mb-4"
        >
          ← Back to Events
        </Link>
        <h1 className="text-3xl font-bold text-[#004aad]">Event Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Event Information Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Event Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Event ID</label>
                <p className="text-gray-800 font-medium">{mockEventDetail.id}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Status</label>
                <span className={getStatusBadge(mockEventDetail.status)}>
                  {mockEventDetail.status}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Event Name</label>
                <p className="text-gray-800">{mockEventDetail.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Date</label>
                <p className="text-gray-800">{mockEventDetail.date}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Venue</label>
                <p className="text-gray-800">{mockEventDetail.venue}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Organizer</label>
                <p className="text-gray-800">{mockEventDetail.organizer}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Expected Crowd</label>
                <p className="text-gray-800">{mockEventDetail.expectedCrowd} participants</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Duration</label>
                <p className="text-gray-800">{mockEventDetail.duration} hours</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Submitted By</label>
                <p className="text-gray-800">{mockEventDetail.submittedBy}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Submission Date</label>
                <p className="text-gray-800">{mockEventDetail.submissionDate}</p>
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Event Description</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Theme</label>
                <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockEventDetail.theme}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Detailed Description</label>
                <p className="text-gray-800 bg-gray-50 rounded-lg p-3">{mockEventDetail.notes}</p>
              </div>
            </div>
          </div>

          {/* Documents Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Supporting Documents</h2>
            <p className="text-[#004aad] cursor-pointer hover:text-[#003380] transition-colors font-medium">
              {mockEventDetail.fileName}
            </p>
          </div>

          {/* Comments Section */}
          {comments.length > 0 && (
            <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Comments & Feedback</h2>
              <div className="space-y-4">
                {comments.map((comment, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-medium text-gray-800">{comment.role}</p>
                      <p className="text-xs text-gray-500">{comment.date}</p>
                    </div>
                    <p className="text-gray-600">{comment.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Approval Timeline Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Approval Timeline</h2>
            <div className="space-y-6">
              {approvalStages.map((stage, index) => (
                <div key={stage.stage} className="flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      stage.status === 'Completed' ? 'bg-green-500 border-green-500' :
                      stage.status === 'In Progress' ? 'bg-yellow-500 border-yellow-500' :
                      'bg-white border-gray-300'
                    }`} />
                    {index < approvalStages.length - 1 && (
                      <div className={`w-0.5 h-12 flex-1 ${
                        stage.status === 'Completed' ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-gray-800">{stage.stage}</h3>
                      <span className={`text-sm font-medium ${getStageStatus(stage.status)}`}>
                        {stage.status}
                      </span>
                    </div>
                    {stage.date && (
                      <p className="text-sm text-gray-600 mb-2">Date: {stage.date}</p>
                    )}
                    {stage.comment && (
                      <p className="text-sm text-gray-500 bg-gray-50 rounded px-2 py-1">
                        {stage.comment}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Edit Event Details
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Download Proposal
              </button>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Share with Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}   