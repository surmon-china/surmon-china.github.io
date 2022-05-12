%% -*- mode: erlang; erlang-indent-level: 2 -*-
%%% Created :  7 May 2012 by mats cronqvist <masse@klarna.com>

%% @doc
%% Demonstrates how to print a record.
%% @end

-module('ex').
-author('mats cronqvist').
-export([demo/0,
         rec_info/1]).

-record(demo,{a="One",b="Two",c="Three",d="Four"}).

rec_info(demo) -> record_info(fields,demo).

demo() -> expand_recs(?MODULE,#demo{a="A",b="BB"}).

expand_recs(M,List) when is_list(List) ->
  [expand_recs(M,L)||L<-List];
expand_recs(M,Tup) when is_tuple(Tup) ->
  case tuple_size(Tup) of
    L when L < 1 -> Tup;
    L ->
      try
        Fields = M:rec_info(element(1,Tup)),
        L = length(Fields)+1,
        lists:zip(Fields,expand_recs(M,tl(tuple_to_list(Tup))))
      catch
        _:_ -> list_to_tuple(expand_recs(M,tuple_to_list(Tup)))
      end
  end;
expand_recs(_,Term) ->
  Term.

