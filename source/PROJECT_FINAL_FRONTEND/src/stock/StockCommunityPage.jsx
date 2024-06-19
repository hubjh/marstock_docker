import GlobalStyle from "../utils/style/GlobalStyle";

import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import React, { useState } from "react";
import CommunityPagination from "./stockcomponent/CommunityPagination";
import CommonAxios from "../utils/common/CommonAxios";
import { useEffect } from "react";
import formatDate from "../utils/component/FormatDate";
import { Common } from "../utils/common/Common";

import StockPage from "./StockPage";
import {
  StockCommunityContainer,
  CommunityTitleZone,
  ComTitle01,
  ComTitle02,
  ComTitle03,
  ComTitle04,
  CommentBox,
  ComContentZone,
  ComCon01,
  ComCon02,
  ComCon03,
  ComCon04,
  BottomCheckZone,
  RadioButton,
  RadioButtonContainer,
  LikesButton,
  DisLikesButton,
} from "./StockCommunityStyle";
import StockCommunityUpload from "./stockcomponent/StockCommunityUpload";
import StockCommunitySearch from "./stockcomponent/StockCommunitySearch";

const StockCommunityPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.

  const [currentPage, setCurrentPage] = useState(1);
  // 종목 토론 게시글 리스트
  const [discussionObject, setDiscussionObject] = useState({});
  const [searchType, setSearchType] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [checkSearch, setCheckSearch] = useState(false);
  const [checkPost, setCheckPost] = useState(false);

  // 각 댓글에 대한 상태를 관리하는 배열
  // const [commentStates, setCommentStates] = useState({});
  const [selectedCommentId, setSelectedCommentId] = useState(false);

  const totalPages = discussionObject.totalPages;
  console.log("totalPages : ", totalPages);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = discussionObject.content;

  // // 댓글 클릭 시 해당 댓글의 상태를 토글
  // const handleCommentClick = (commentId) => {
  //   setCommentStates((prevState) => ({
  //     ...prevState,
  //     [commentId]: !prevState[commentId],
  //   }));
  //   setSelectedCommentId(commentId);
  // };

  useEffect(() => {
    const communityFetchData = async () => {
      try {
        const page = currentPage - 1;
        const size = 2;
        const sort = "date,desc";
        const type = searchType ? "author" : "content";
        const keyword = searchKeyword;
        const discussion = await CommonAxios.getPageableAxios(
          "community",
          "search",
          { keyword, type, page, size, sort }
        );
        if (discussion.status === 200) {
          setDiscussionObject(discussion.data);
        } else {
          console.log("discussion : False");
        }
      } catch (error) {
        console.error("Error fetching discussion data:", error);
        throw error;
      }
      setCheckSearch(false);
      setCheckPost(false);
      setSelectedCommentId(false);
    };
    communityFetchData(); // Call the inner function immediately

    // selectedCommentId가 변경될 때마다 plusViewCount 호출
    // if (selectedCommentId) {
    //   plusViewCount();
    // }
    // }, [currentPage, checkSearch, checkPost, selectedCommentId]); // selectedCommentId 추가
  }, [currentPage, checkSearch, checkPost, selectedCommentId]);

  const clickLikes = async (commentId) => {
    console.log(commentId);
    const accessToken = Common.getAccessToken();
    const multiDto = {
      accessToken: accessToken,
    };
    try {
      const likes = await CommonAxios.postAxios(
        "community",
        `like/${commentId}`,
        multiDto
      );
      if (likes.status === 200) {
        console.log(likes.data);
      } else {
        console.log("likes : False");
      }
    } catch (error) {
      console.error("Error fetching discussion data:", error);
      throw error;
    }
    setSelectedCommentId(true);
  };

  const clickDisLikes = async (commentId) => {
    console.log(commentId);
    const accessToken = Common.getAccessToken();
    const multiDto = {
      accessToken: accessToken,
    };
    try {
      const disLikes = await CommonAxios.postAxios(
        "community",
        `dislike/${commentId}`,
        multiDto
      );
      if (disLikes.status === 200) {
        console.log(disLikes.data);
      } else {
        console.log("disLikes : False");
      }
    } catch (error) {
      console.error("Error fetching discussion data:", error);
      throw error;
    }
    setSelectedCommentId(true);
  };

  return (
    <>
      <InlineContainer
        color=""
        contents={
          <StockCommunityContainer>
            <StockCommunityUpload
              setCheckPost={setCheckPost}
            ></StockCommunityUpload>

            <CommunityTitleZone>
              <ComTitle01>내용</ComTitle01>
              <ComTitle02>날짜</ComTitle02>
              <ComTitle03>글쓴이</ComTitle03>
              <ComTitle04>조회</ComTitle04>
              <ComTitle04>추천</ComTitle04>
              <ComTitle04>비추천</ComTitle04>
            </CommunityTitleZone>

            <CommentBox>
              {currentItems &&
                currentItems.map((item) => (
                  <>
                    <ComContentZone
                      key={item.id}
                      // onClick={() => handleCommentClick(item.id)}
                    >
                      <ComCon01>{item.content}</ComCon01>
                      <ComCon02>{formatDate(item.date)}</ComCon02>
                      <ComCon03>{item.authorId}</ComCon03>
                      <ComCon04>
                        {item.likes.length + item.dislikes.length}
                      </ComCon04>
                      <ComCon04>
                        <LikesButton onClick={() => clickLikes(item.id)}>
                          {item.likes.length}
                        </LikesButton>
                      </ComCon04>
                      <ComCon04>
                        <DisLikesButton onClick={() => clickDisLikes(item.id)}>
                          {item.dislikes.length}
                        </DisLikesButton>
                      </ComCon04>
                    </ComContentZone>
                    {/* {commentStates[item.id] && (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <div>
                            <input type="text" />
                            <button>등록</button>
                            <button>추천</button>
                            <button>비추천</button>
                          </div>
                        </div>
                        <p style={{ color: "white" }}>댓글 내용</p>
                      </>
                    )} */}
                  </>
                ))}

              <CommunityPagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />

              <BottomCheckZone>
                <RadioButtonContainer>
                  <RadioButton
                    id="radio1"
                    name="radio"
                    onClick={() => setSearchType(false)}
                    checked={!searchType}
                  />
                  내용
                </RadioButtonContainer>

                <RadioButtonContainer>
                  <RadioButton
                    id="radio2"
                    name="radio"
                    onClick={() => setSearchType(true)}
                    checked={searchType}
                  />
                  글쓴이
                </RadioButtonContainer>

                <StockCommunitySearch
                  setSearchKeyword={setSearchKeyword}
                  setCheckSearch={setCheckSearch}
                />
              </BottomCheckZone>
            </CommentBox>
          </StockCommunityContainer>
        }
      ></InlineContainer>
    </>
  );
};

export default StockCommunityPage;
