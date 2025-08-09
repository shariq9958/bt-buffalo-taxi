import React from 'react';
import './BorderNews.css'; // We will create this CSS file

const BorderNews = () => {
  return (
    <div className="border-news-container">
      <div className="page-header">
        <h1>U.S. & Canada Border Crossing News</h1>
        <p>Your guide to a smooth journey between the USA and Canada in the Niagara Region.</p>
      </div>

      <div className="news-content">
        <article className="news-article">
          <img src="https://placehold.co/800x600/EFEFEF/333333?text=Travel+Documents" alt="Travel documents for border crossing" className="news-image" />
          <div className="news-text">
            <h2>Essential Travel Documents for a Smooth Crossing</h2>
            <p className="article-meta">Last updated: May 2024</p>
            <p>The Western Hemisphere Travel Initiative (WHTI) requires all travelers to present a valid passport or other approved secure document when entering the United States. Ensure you have the right documents for your entire party to avoid delays.</p>
            <h4>For U.S. Citizens:</h4>
            <ul>
              <li><strong>U.S. Passport or U.S. Passport Card:</strong> The most reliable and universally accepted documents.</li>
              <li><strong>Enhanced Driver's License (EDL):</strong> Available in select states like New York, an EDL is a valid document for land and sea crossings. Note: A REAL ID is not the same and cannot be used for border crossings.</li>
              <li><strong>NEXUS Card:</strong> For pre-approved, low-risk travelers, the NEXUS card allows for expedited processing at dedicated lanes.</li>
              <li><strong>Children Under 16:</strong> A birth certificate (original or copy) is often sufficient, but a passport is highly recommended.</li>
            </ul>
            <h4>For Canadian Citizens:</h4>
            <ul>
              <li><strong>Canadian Passport:</strong> The standard for all international travel.</li>
              <li><strong>Enhanced Driver's License or Enhanced Identification Card:</strong> Similar to the U.S. EDL.</li>
              <li><strong>NEXUS Card:</strong> Expedite your entry into both countries.</li>
            </ul>
            <p>Always check the official U.S. Customs and Border Protection (CBP) and Canada Border Services Agency (CBSA) websites before your trip for the most current requirements.</p>
          </div>
        </article>

        <article className="news-article reverse">
          <img src="https://placehold.co/800x600/EFEFEF/333333?text=Niagara+Bridges" alt="The Peace Bridge connecting Buffalo, NY and Fort Erie, ON" className="news-image" />
          <div className="news-text">
            <h2>Navigating the Niagara Region Bridges</h2>
            <p className="article-meta">Bridge Information & Wait Times</p>
            <p>The Niagara region has three primary international bridges connecting the U.S. and Canada. Knowing which one to use can save you time.</p>
            <ul>
              <li><strong>Rainbow Bridge:</strong> The closest bridge to the falls, connecting Niagara Falls, NY, and Niagara Falls, ON. It's open to cars and pedestrians 24/7. It offers stunning views but can be busy during peak tourist season.</li>
              <li><strong>Lewiston-Queenston Bridge:</strong> Located further north, this is a major commercial crossing but is also open to passenger vehicles 24/7. It's a good alternative if the Rainbow Bridge is congested. No pedestrians are allowed.</li>
              <li><strong>Peace Bridge:</strong> Connects Buffalo, NY, with Fort Erie, ON. This is another 24/7, high-volume bridge and your primary route if traveling from Buffalo.</li>
              <li><strong>Whirlpool Bridge:</strong> This bridge is for NEXUS cardholders only.</li>
            </ul>
            <p>Before you leave, check real-time bridge wait times online or via the Peace Bridge app to choose the fastest route. Tolls are collected when entering Canada.</p>
          </div>
        </article>
        
        <article className="news-article">
          <img src="https://placehold.co/800x600/EFEFEF/333333?text=Border+Checkpoint" alt="A car waiting at a border checkpoint" className="news-image" />
          <div className="news-text">
            <h2>Tips for a Hassle-Free Border Experience</h2>
            <p className="article-meta">Travel Smart!</p>
            <ul>
                <li><strong>Be Prepared:</strong> Have your travel documents out and ready for the border services officer.</li>
                <li><strong>Declare Everything:</strong> Be honest about all goods you are bringing across the border, including gifts, alcohol, and tobacco. Be aware of personal exemption limits to avoid paying duty.</li>
                <li><strong>Traveling with Children:</strong> If traveling with minors that are not your own, carry a letter of consent from their parents or legal guardians.</li>
                <li><strong>Cannabis is Prohibited:</strong> Despite being legal in Canada and some states, it is illegal to transport cannabis across the U.S.-Canada border.</li>
                <li><strong>Turn Off Cell Phones:</strong> Do not use your cell phone while speaking to the border officer.</li>
                <li><strong>Be Patient & Courteous:</strong> Answer all questions directly and politely.</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BorderNews; 