/* istanbul ignore file */
import React from 'react';

export default {
  id: 'testing-id',
  items: [
    {
      id: '1',
      heading: 'What are the granting programs available for application?',
      content:
        'The Aesop Foundation will consider support for organisations working in Australia. While the majority of our grants are awarded to organisations that are invited to apply, we remain open to hearing new ideas from potential partners. If you believe your organisation’s project meets the objectives and guidelines of the Foundation we warmly invite you to submit a letter of enquiry.',
    },
    {
      id: '2',
      heading: 'What organisations are considered for applications?',
      content:
        'The Aesop Foundation supports its partners through two granting programs. The Companion Grants program provides up to AUD30,000, usually for a single year. The Partnerships Grants program provides between AUD100,000-300,000 per year for up to five years.',
    },
    {
      id: '3',
      heading: 'What are the guidelines for an application?',
      content: (
        <React.Fragment>
          <p>
            We respectfully request that you review the following guidelines to
            ensure close alignment prior to submitting a letter of enquiry:
          </p>
          <p>
            Applicant organisations must be a DGR Item 1 entity, operating in
            Australia and a charity registered with the ACNC.
          </p>
          <p>
            The project must meet, or make a contribution to meeting, one or
            both of the objectives of the Foundation, as follows',
          </p>
        </React.Fragment>
      ),
    },
  ],
};
