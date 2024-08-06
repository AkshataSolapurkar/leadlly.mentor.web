export const joinRoom = async (data: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CHAT_API_BASE_URL}/api/chat/mentor/joinroom`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "include",
          cache: "no-store",
        }
      );
  
      const responseData = await response.json();
      console.log(responseData)
  
      return responseData;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error registering user: ${error.message}`);
      } else {
        throw new Error("An unknown error occurred while registering user!");
      }
    }
  };
  