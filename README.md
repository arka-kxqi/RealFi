
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=1000&size=55&pause=1000&center=true&vCenter=true&width=1000&lines=Reels+-+Fi;  Now+Watch+And+Earn+Rewards" alt="Typing SVG" /></a>
<br/> <br/> <br/> <br/> <br/>
<img width="371" alt="Screenshot 2024-08-08 at 12 55 05 AM" src="https://github.com/user-attachments/assets/c2878eb1-6950-43e3-b1e4-92f2f17226da">
<br/> <br/>
### APT-Reels-fi is a platform on **EDU Chain** designed for avid reel viewers, offering them the opportunity to place bets on the engagement of reels. If the engagement of a reel increases within a specified time frame, users can earn rewards based on their predictions.

- https://opencampus-codex.blockscout.com/address/0xb42f6f8e531cAEB940E2d3B35090367a09CD1BEF
## Track Eligibility
- **Infrastructure:** Reels-Fi leverages blockchain technology, providing a decentralized platform for content monetization.
- **DeFi:** Users can invest in reels, earning returns based on content engagement, akin to decentralized finance.
- **Earn:** Users can earn NFTs as rewards for their successful predictions on reel engagement.
- **Learn:** Educational content creators can monetize their instructional reels, encouraging learning through rewards.
- **EduFi:** The platform promotes educational content creation, aligning with the goals of EduFi.
- **Misc:** Reels-Fi provides a broad range of monetization opportunities, making it eligible for various other tracks.



## Key Features
### Here are the Reels-Fi features in point form:

- **Monetize Your Existing Reels:** Turn your current reels into revenue-generating content.
- **Upload Custom Reels:** Share and monetize your own custom-created reels.
- **Invest in Favorite Creators' Reels:** Place an investment amount on your favorite content creators' reels for a specific tenure.
- **Withdraw Rewards:** Redeem your earnings once the investment tenure is complete.
- **Earn Reels-Fi Tokens:** Gain Reels-Fi tokens through a "Refer and Earn" program.

## Technical Architecture
<img width="1214" alt="Screenshot 2024-08-07 at 10 07 16 AM" src="https://github.com/user-attachments/assets/300dffc3-9f8a-44b6-aa39-940c847cfd65">

## TechStack

- Next.js
- Typescript
- Tailwind CSS
- Move Language
- Solidity
- Petra Wallet SDK

## Challenges and Solution
- Inadequate Rewards for User Engagement
    - Problem: Despite contributing valuable content and engagement, users receive little to no tangible rewards for their participation on most social media platforms.
- Barrier to Monetization for Small Creators
    - Many small creators struggle to monetize their content effectively due to high entry barriers and the dominance of established influencers.
- Time and Effort Not Valued
    - Users spend significant time and effort creating and engaging with content but often feel that their contributions are undervalued.

## Bounty Tracks Applied for and Deployed Contracts Link:
- **1. Polygon Amoy Deployment:** <br/>
  - Reels-Fi : https://www.oklink.com/amoy/address/0x93073de0d67ecfbbc44321ef7e4d33bcf7f53b9a
  - USDC Tokens : https://www.oklink.com/amoy/address/0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582
- **2. Aptos Social Track:**
  - Reels-Fi: https://explorer.aptoslabs.com/txn/86687535/changes?network=devnet 
  - Checkout Transactions : https://explorer.aptoslabs.com/account/0x25e6d86a5a7083d9d61e40381e5238ab6d2e785825eba0183cebb6009483dab4?network=devnet
- **3. EDU Chain:**
  - Platform Token : https://opencampus-codex.blockscout.com/address/0x6D4E4b9cEb5A92F5212c017187528bCd0c516965
  - Reels-Fi Contract : https://opencampus-codex.blockscout.com/address/0xBCab4ba549886e6BEF67d9f3d381a2710316F8CA
- **4. Wan Chain:**
  - Platform Token : https://testnet.wanscan.org/token/0x6d4e4b9ceb5a92f5212c017187528bcd0c516965
  - Reels-Fi Contract : https://testnet.wanscan.org/address/0xBCab4ba549886e6BEF67d9f3d381a2710316F8CA
- **5. Core Dao Social Track:**
  - Platform Token : https://scan.test.btcs.network/token/0x6d4e4b9ceb5a92f5212c017187528bcd0c516965
  - Reels-Fi Contract : https://scan.test.btcs.network/address/0xBCab4ba549886e6BEF67d9f3d381a2710316F8CA

## Contract Functionality:

| Function Name                                    | Description                                                                                                                                                                                                                             | Parameters                                                                                                                                                                                                                                                                               | Access Control |
|--------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| `createPost(bool _wantToMonetizeThisPost)`        | Allows users to create a new post. Users can choose to monetize the post by setting the `_wantToMonetizeThisPost` parameter. Ensures users meet minimum requirements like paying creation fees before creating the post.                  | `_wantToMonetizeThisPost`: `bool` - Whether the post should be monetized.                                                                                                                                                                                                                 | Public         |
| `depositFunds(uint256 _amount, uint256 _postId)`  | Enables users to deposit funds into a specific post's monetization pool. The function updates the post's total amount and records deposit information such as locking duration.                                                          | `_amount`: `uint256` - Amount to deposit.<br> `_postId`: `uint256` - ID of the post to deposit into.                                                                                                                                                                                      | Public         |
| `sellFunds(uint256 _postId, uint256 _depositID, uint256 _amount, uint256 _likes, uint256 _views, uint256 _shares, uint256 _followers)` | Allows users to sell their investment in a post and retrieve funds. The function calculates rewards based on engagement metrics and transfers corresponding funds to the user's wallet.              | `_postId`: `uint256` - ID of the post.<br> `_depositID`: `uint256` - ID of the deposit.<br> `_amount`: `uint256` - Amount to sell.<br> `_likes`: `uint256` - Number of likes.<br> `_views`: `uint256` - Number of views.<br> `_shares`: `uint256` - Number of shares.<br> `_followers`: `uint256` - Number of followers. | Public         |
| `_calculateEngagementRate(uint256 likes, uint256 shares, uint256 views, uint256 followers)` | Calculates the engagement rate of a post based on various metrics, crucial for revenue calculation and user rewards.                                                                               | `likes`: `uint256` - Number of likes.<br> `shares`: `uint256` - Number of shares.<br> `views`: `uint256` - Number of views.<br> `followers`: `uint256` - Number of followers.                                                                                                            | Internal       |
| `_updateEngagement(uint256 fixedExpenses, uint256 newLikes, uint256 newShares, uint256 newViews, uint256 newFollowers)` | Updates engagement metrics and revenue generated by a post, considering fixed expenses and new engagement data.                                                                                   | `fixedExpenses`: `uint256` - Fixed expenses like creation fees.<br> `newLikes`: `uint256` - New likes.<br> `newShares`: `uint256` - New shares.<br> `newViews`: `uint256` - New views.<br> `newFollowers`: `uint256` - New followers.                                                     | Internal       |
| `_calculateRevenue(uint256 likes, uint256 shares, uint256 views, uint256 followers)` | Calculates the revenue generated by a post based on engagement metrics, influencing user rewards and monetization distribution.                                                                    | `likes`: `uint256` - Number of likes.<br> `shares`: `uint256` - Number of shares.<br> `views`: `uint256` - Number of views.<br> `followers`: `uint256` - Number of followers.                                                                                                            | Internal       |
| `getUserDeposits(address _user)`                 | Retrieves information about a user's deposits, returning an array of Deposit structs with details such as deposited amount, locking duration, and post ID.                                                                               | `_user`: `address` - Address of the user whose deposits are being queried.                                                                                                                                                                                                                | Public         |

### Platform UI
<img width="1470" alt="Screenshot 2024-08-08 at 2 03 52 PM" src="https://github.com/user-attachments/assets/ea999d8f-e6f7-47e1-987e-e44d57ceac36">
<img width="1470" alt="Screenshot 2024-08-08 at 2 04 11 PM" src="https://github.com/user-attachments/assets/96bbc367-fd66-4624-afac-9b79407d3346">
<img width="1469" alt="Screenshot 2024-08-08 at 2 28 29 AM" src="https://github.com/user-attachments/assets/2b584fdb-daa4-4bcd-b7be-190b2dd7f253">
<img width="1470" alt="Screenshot 202

4-08-08 at 2 29 10 AM" src="https://github.com/user-attachments/assets/cebf4e8e-bb70-4d78-ae0f-086a223c20c3">

### Test the Platform
[Demo on Replit](https://replit.com/@reelsFi)

### Potential Platform Expansion and Growth
1. **Multi-chain Support:** Expanding to support additional blockchains to attract a wider user base.
2. **NFT Integration:** Offering creators the ability to mint their reels as NFTs and sell them on the platform.
3. **Enhanced Analytics:** Providing creators with detailed insights into their content performance and audience engagement.
4. **Collaboration Tools:** Introducing features that allow creators to collaborate with other users, share profits, and co-create content.
5. **Community Voting:** Implementing a voting system where the community can influence platform developments and feature releases.
