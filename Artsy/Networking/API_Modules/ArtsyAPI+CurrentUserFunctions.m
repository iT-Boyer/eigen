#import "ArtsyAPI+Private.h"
#import "ArtsyAPI+CurrentUserFunctions.h"
#import "ARUserManager.h"
#import "ARRouter.h"
#import "User.h"
#import "Bidder.h"

@implementation ArtsyAPI (CurrentUserFunctions)

+ (void)getMeHEADWithSuccess:(void (^)(void))success failure:(void (^)(NSHTTPURLResponse *response, NSError *error))failure;
{
    NSURLRequest *request = [ARRouter newMeHEADRequest];
    [self performRequest:request success:^(id thing) {
        success();
    } failure:^(NSURLRequest *request, NSHTTPURLResponse *response, NSError *error) {
        failure(response, error);
    }];
}

+ (void)getMe:(void (^)(User *))success failure:(void (^)(NSError *error))failure
{
    NSURLRequest *request = [ARRouter newUserInfoRequest];

    [self getRequest:request parseIntoAClass:[User class] success:success failure:failure];
}

+ (void)updateCurrentUserProperty:(NSString *)property toValue:(id)value success:(void (^)(User *user))success failure:(void (^)(NSError *error))failure
{
    NSParameterAssert(value);

    NSDictionary *params = @{property : value};
    NSURLRequest *request = [ARRouter newUserEditRequestWithParams:params];

    [self getRequest:request parseIntoAClass:[User class] success:success failure:failure];
}

+ (void)getCurrentUserBiddersForSale:(NSString *)saleID success:(void (^)(NSArray<Bidder *> *))success failure:(void (^)(NSError *error))failure
{
    if ([[ARUserManager sharedManager] currentUser] == nil) {
        success(@[]);
        return;
    }

    NSURLRequest *request = [ARRouter biddersRequestForSale:saleID];
    [self getRequest:request parseIntoAnArrayOfClass:[Bidder class] success:success failure:failure];
}

@end
