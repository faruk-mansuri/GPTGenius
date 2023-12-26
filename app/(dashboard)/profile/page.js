import { UserProfile, auth } from '@clerk/nextjs';
import { fetchUserTokensById } from '../../../utils/action';

const ProfilePage = async () => {
  const { userId } = auth();
  const currentTokens = await fetchUserTokensById(userId);

  return (
    <div>
      <h1 className='mb-8 ml-8 text-4xl font-extrabold'>
        Token Amount : {currentTokens}
      </h1>
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
